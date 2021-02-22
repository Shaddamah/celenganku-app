import Swal from 'sweetalert2'
import sortBy from 'lodash/sortBy'
import StringFormater from '../../../helper/string-formater'
import DateFormater from '../../../helper/date-formater'
import APIData from '../../../data/api-data'
import ModalInitializer from '../../../utils/modal-initializer'

const DataList = {
  async render() {
    return /* html */`
      <div class="p-4 pt-0 md:p-8 md:pt=8 lg:p-12 lg:pt-12 h-full">
        <div class="flex flex-col h-full mb-20 md:mb-0 md:max-w-screen-md lg:max-w-screen-xl mx-auto">
          <div class="text-center">
            <p class="text-xl leading-8 font-bold tracking-tight text-gray-800 md:text-2xl md:mt-2">
              Data Celenganku
            </p>
            <div class="flex flex-row mt-4 md:mt-6 ">
              <div class="flex flex-row">
                  <button id="login-option" disabled
                    class="w-max bg-secondary text-white py-3 px-10 rounded-lg rounded-r-none disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-default">Akun Terdaftar</button>
                  <button id="register-option"
                    class="w-max bg-secondary text-white py-3 px-10 rounded-lg rounded-l-none disabled:bg-white disabled:text-gray-500 disabled:cursor-default">Data Siswa</button>
                </div>
              <div class="flex flex-1 md:flex-initial ml-4 md:ml-auto flex-row ">
                <input id="search-input" placeholder="Cari nisn, nama, dll" value="" type="text"
                  class="text-md block px-5 py-3 rounded-lg w-full bg-gray-200">
                <svg class="w-8 h-8 mt-auto mb-auto ml-4 text-secondary" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <button id="create-account"
              class="w-max bg-secondary text-white mx-1 py-3 px-8 ml-6 rounded-lg disabled:opacity-50">Buat Akun</button>
            </div>
          </div>
          <div class="bg-gray-200 gap-5 p-4 rounded-lg flex flex-col mt-6 md:p-8">
            <div class="flex-1 py-0 white rounded-lg">
              <table id="transaction-table" class="table-auto w-full">
                <tbody>
                  <tr class="text-left text-gray-700">
                    <th class="font-normal p-5 pr-0 pt-0">NISN</th>
                    <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Nama Siswa</th>
                    <th class="font-normal pb-5 pt-0">Saldo</th>
                    <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Email</th>
                    <th class="font-normal pb-5 pt-0">Laporan</th>
                    <th class="font-normal pb-5 pt-0 justify-end"></th>
                  </tr>
                </tbody>
              </table>
              <div class="preloader p-4 flex mt-auto mb-auto mx-auto justify-center">
                <div class="loader loader-mini ease-linear rounded-full border-8 border-t-8 border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
  },

  async afterRender() {
    // Remove Preloders
    this._totalTransaction = 0
    const preloaders = document.querySelectorAll('.preloader')
    const printReportButton = document.getElementById('print-report-button')

    // Fetch Data
    const responseData = await APIData.retrieveUser()
    this._userId = responseData.id

    await this._renderTable()
    await this._createPrintEvent(printReportButton)
    preloaders.forEach((preloader) => {
      preloader.remove()
    })
  },

  async _createPrintEvent(printButton) {
    printButton.addEventListener('click', () => {
      ModalInitializer.init({
        title: 'Laporan',
        content:
        `<div class="px-10 py-6">
          <div id="modal-content">
            <p class="mt-2 mb-1">Pilih Jangka Waktu</p>
            <div class="my-4 flex flex-col gap-4 md:flex-row">
            <button id="monthly-option" class="w-full p-4 border-2 border-secondary bg-white shadow-lg rounded-lg focus:outline-none ">
              <div class="flex flex-1 md:justify-center">
                <div class="text-white flex flex-1 flex-row">
                  <div data-option class="mx-2 my-auto text-sm bg-secondary text-white p-1 rounded-lg">
                  <p><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></p>
                  </div>
                  <p class="text-gray-700 mt-1">Bulan Ini</p>
                </div>
              </div>
            </button>
            <button id="yearly-option" class="w-full p-4 bg-white shadow-lg rounded-lg focus:outline-none ">
              <div class="flex flex-1 md:justify-center">
                <div class="text-white flex flex-1 flex-row">
                  <div data-option class="mx-2 my-auto text-sm bg-gray-300 text-gray-300 p-1 rounded-lg">
                  <p><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></p>
                  </div>
                  <p class="text-gray-700 mt-1">Tahun Ini</p>
                </div>
              </div>
            </button>
            </div>
          </div>
          <div class="flex justify-end items-center w-100 mt-4">
            <button role="button" id="next-button" class="w-max bg-secondary text-white mx-1 py-3 px-8 rounded-lg disabled:opacity-50">Cetak</button>
          </div>
        </div>`,
      })
      const modal = document.getElementById('modal-laporan')

      this._frequencyOption = 'monthly'
      const frequencyOptionButton = document.querySelectorAll('#monthly-option, #yearly-option')
      const nextButton = document.getElementById('next-button')

      frequencyOptionButton.forEach((option) => {
        option.addEventListener('click', () => {
          this._selectReportOption(frequencyOptionButton, option.id)
        })
      })
      nextButton.addEventListener('click', () => {
        window.location.hash = `#/report/${this._frequencyOption}`
        modal.remove()
      })
    })
  },

  _selectReportOption(optionButton, optionId) {
    const selectedClass = 'mx-2 my-auto text-sm bg-secondary text-white p-1 rounded-lg'
    const nonSelectedClass = 'mx-2 my-auto text-sm bg-gray-200 text-gray-200 p-1 rounded-lg'
    optionButton.forEach((option) => {
      const optionIcon = option.querySelector('div[data-option]')
      if (option.id === optionId) {
        option.classList.add('border-2', 'border-secondary')
        optionIcon.className = selectedClass
      } else {
        option.classList.remove('border-2', 'border-secondary')
        optionIcon.className = nonSelectedClass
      }
    })
    this._frequencyOption = optionId.replace('-option', '')
  },

  async _getProfileData(id) {
    const profileDataArray = []
    profileDataArray.push(await APIData.getAkunSiswa(id))
    profileDataArray.push(await APIData.getProfilSiswa(id))
    profileDataArray.push(await APIData.getDataSiswa(id))

    const profileData = {}
    profileDataArray.forEach((data) => {
      Object.assign(profileData, data)
    })

    return profileData
  },

  async _renderTable() {
    const tableElement = document.getElementById('transaction-table')
    const tableBody = tableElement.querySelector('tbody')
    const allUserAccount = await APIData.getAllAkunSiswa()

    const userTemplate = async (user) => {
      const userData = await this._getProfileData(user.nisn)

      const _deleteButtonInit = (cancelButton) => {
        cancelButton.addEventListener('click', async (event) => {
          event.stopPropagation()
          const result = await Swal.fire({
            icon: 'warning',
            text: 'Tekan pilihan untuk mengkonfirmasi',
            title: 'Hapus transaksi?',
            showCancelButton: true,
            confirmButtonText: 'Batalkan',
            cancelButtonText: 'Jangan',
            customClass: {
              popup: 'popup-sweetalert',
              confirmButton: 'btn-sweetalert bg-success',
              cancelButton: 'btn-sweetalert bg-failed',
            },
            buttonsStyling: false,
          })

          if (result.isConfirmed) {
            // const response = await APIData.(transaction.id_transaksi)
            // console.log(response)
            this._renderTable()
          }
        })
        return true
      }

      return /* html */`<tr class="font-bold text-gray-800 mb-5 hover:shadow-lg">
      <td class="p-5 pr-0 text-gray-500 bg-white rounded-l-lg">${userData.nisn}</td>
      <td class="bg-white select-all hidden lg:table-cell">${userData.nama}</td>
      <td class="bg-white">RP ${userData.saldo}</td>
      <td class="bg-white hidden lg:table-cell">${userData.email}</td>
      <td class="bg-white hidden lg:table-cell">${userData.no_telepon}</td>
      <td class="bg-white">
        <div class="ml-2 md:ml-0 text-sm bg-secondary p-1 md:py-2 md:px-6 rounded-lg w-max">
        <p class="hidden md:inline">SELESAI</p>
        // <p class="inline md:hidden"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="0"></path></svg></p>
        </div>
      </td>
      <td class="bg-white rounded-r-lg justify-end flex p-3 pl-0">
        <button class="w-8 md:p-2 md:w-12 h-12 text-gray-700" id="settings">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
          </svg>
        </button>
        <div id="settings-dropdown"
          class="hidden absolute mt-10 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <p id="reminder-element-${userData.nisn}"></p>
          </div>
        </div>
      </td>
    </tr>
    <tr class="h-4"></tr>`
    }

    tableBody.innerHTML = `
      <tr class="text-left text-gray-700">
        <th class="font-normal p-5 pr-0 pt-0">NISN</th>
        <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Nama Siswa</th>
        <th class="font-normal pb-5 pt-0">Saldo</th>
        <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Email</th>
        <th class="font-normal pb-5 pt-0">Laporan</th>
        <th class="font-normal pb-5 pt-0 justify-end"></th>
      </tr>`
    allUserAccount.data.forEach(async (account) => {
      const userArray = await userTemplate(account)
      tableBody.innerHTML += userArray
    })
    this._createTableEvent()
  },

  async _createTableEvent() {
    const searchInput = document.getElementById('search-input')
    const table = document.getElementById('transaction-table')

    searchInput.addEventListener('keyup', (event) => {
      const filter = event.target.value.toUpperCase()
      const transaction = table.querySelectorAll('tr[class*="hover:shadow-lg"]')
      event.preventDefault()

      transaction.forEach((row) => {
        const rowData = row.querySelectorAll('td')
        if (rowData.length) {
          const textArray = []
          rowData.forEach((data) => {
            textArray.push(data.textContent.toUpperCase() || data.innerText.toUpperCase())
          })
          const textValue = textArray.toString()
          if (textValue.indexOf(filter) > -1) {
            row.style.display = ''
          } else {
            row.style.display = 'none'
          }
        }
      })
    })
  },

}

export default DataList