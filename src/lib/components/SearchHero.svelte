<script lang="ts">
    import { Search, MapPin } from 'lucide-svelte';
  </script>
  
  <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl font-bold text-white mb-4">
        Find Your Dream Job Today
      </h2>
      <p class="text-blue-100 mb-8 text-lg">
        Discover opportunities that match your skills and aspirations
      </p>
      <div class="bg-white rounded-xl shadow-lg p-4 md:p-6 max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div class="flex-1 flex items-center space-x-4 w-full border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
            <Search class="h-5 w-5 text-blue-600" />
            <input
              type="text"
              placeholder="Job title, skills, or keywords"
              class="flex-1 focus:outline-none text-lg"
            />
          </div>
          <div class="flex-1 flex items-center space-x-4 w-full">
            <MapPin class="h-5 w-5 text-blue-600" />
            <input
              type="text"
              placeholder="City, state, or remote"
              class="flex-1 focus:outline-none text-lg"
            />
          </div>
          <button class="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-lg shadow-md">
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  </div>