<template>
  <div class="relative flex flex-col items-center justify-center h-screen bg-gray-200 p-5">
    <div class="absolute inset-0 bg-cover bg-center opacity-70"></div>
    <div class="relative bg-white bg-opacity-90 shadow-lg rounded-lg p-6 w-full max-w-lg">
      <h1 class="text-2xl font-bold text-center text-gray-700 mb-4">Upload CSV File</h1>
      <input
        type="file"
        accept=".csv"
        @change="handleFileUpload($event)"
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none py-2 px-3"
      />
      <button
        @click="uploadFile"
        class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        :disabled="!selectedFile"
      >
        Upload & Process
      </button>
    </div>

    <div v-if="responseData" class="text-gray-700 text-4xl pt-4 my-4">
      <h1>Expected output:</h1>
    </div>
    <div
      v-if="responseData"
      class="grid grid-cols-1 gap-4 px-4 mt-8 md:grid-cols-3 lg:grid-cols-5 sm:px-8"
    >
      <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-green-400">
          <svg
            class="text-white h-12 w-12"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#ffffff"
                fill-rule="evenodd"
                d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm8-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm.01 8a1 1 0 102 0V9a1 1 0 10-2 0v5z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Number of fire addressed</h3>
          <p class="text-3xl">{{ this.addressed }}</p>
        </div>
      </div>
      <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-indigo-400">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            ></path>
          </svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="h-12 w-12 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6l4 2M12 22a10 10 0 100-20 10 10 0 000 20z"
            />
          </svg>
        </div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Numbers of fire delayed</h3>
          <p class="text-3xl">{{ this.missed }}</p>
        </div>
      </div>
      <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-yellow-400">
          <svg
            class="h-12 w-12 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Total operational costs</h3>
          <p class="text-3xl">$ {{ this.operationalCost }}</p>
        </div>
      </div>
      <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-blue-400">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            ></path>
          </svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            ></path>
          </svg>
        </div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Estimated damage costs</h3>
          <p class="text-3xl">$ {{ this.damageCost }}</p>
        </div>
      </div>
      <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-red-400">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            ></path>
          </svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="h-12 w-12 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 2s4 3 4 7-4 5-4 7 2 3 2 5-2 2-2 2-2 0-2-2 2-3 2-5-4-3-4-7 4-7 4-7z"
            />
          </svg>
        </div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Fire Severity Report</h3>
          <p class="text-xl">
            high: {{ this.severityReport.high }}, low: {{ this.severityReport.low }}, medium:
            {{ this.severityReport.medium }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      selectedFile: null,
      responseData: null, // Store API response data
      addressed: null,
      missed: null,
      operationalCost: null,
      severityReport: null,
      damageCost: null,
    }
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0]
    },
    async uploadFile() {
      if (!this.selectedFile) {
        alert('Please select a file first.')
        return
      }

      let formData = new FormData()
      formData.append('file', this.selectedFile)

      try {
        console.log('Uploading file...')

        // Upload file to Flask API
        const uploadResponse = await axios.post('http://localhost:5000/data/load_data', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })

        console.log('File uploaded successfully:', uploadResponse.data)

        // Fetch the processed data
        const filePath = uploadResponse.data.file_path
        const response = await axios.get(
          `http://localhost:5000/optimize_response?file=${encodeURIComponent(filePath)}`,
        )

        console.log('Response received:', response.data)
        this.addressed = response.data['Number of fires addressed']
        this.damageCost = response.data['Estimated damage costs from missed responses']
        this.operationalCost = response.data['Total operational costs']
        this.missed = response.data['Number of fires missed']
        this.severityReport = response.data['Fire severity report']
        this.responseData = response.data
      } catch (error) {
        console.error('Error uploading file or fetching data:', error)
        alert('An error occurred while processing the file.')
      }
    },
  },
}
</script>
<style scoped>
.background-img {
  background-image: url('../assets/img/bg.jpg');
}
</style>
