<script lang="ts">
    import { Briefcase } from 'lucide-svelte';
    export let savedJobsCount: number;
  </script>
  
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
            <Briefcase class="h-6 w-6 text-white" />
          </div>
          <h1 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            DreamCareer
          </h1>
        </div>
        <nav class="flex items-center space-x-8">
          <a href="#" class="text-gray-900 hover:text-blue-600 font-medium">Find Jobs</a>
          <a href="#" class="text-gray-500 hover:text-blue-600">Companies</a>
          <a href="#" class="text-gray-500 hover:text-blue-600">Resources</a>
          <a href="#" class="text-gray-500 hover:text-blue-600">Saved ({savedJobsCount})</a>
        </nav>
      </div>
    </div>
  </header>