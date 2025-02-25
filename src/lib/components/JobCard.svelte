<script lang="ts">
    import { Building2, MapPin, Clock, Bookmark, ChevronRight } from 'lucide-svelte';
    
    export let job: {
      title: string;
      company: string;
      location: string;
      type: string;
      salary: string;
      posted: string;
      logo: string;
      skills: string[];
      featured: boolean;
      summary: string;
    };
    export let index: number;
    export let saved: boolean;
    export let onSave: () => void;
    export let onApply: () => void;
  </script>
  
  <div
    class="bg-white rounded-xl p-6 transition-all duration-300 {job.featured ? 'border-2 border-blue-500 shadow-md' : 'shadow-sm'}"
  >
    <div class="flex items-start">
      <img
        src={job.logo}
        alt={job.company}
        class="w-16 h-16 rounded-xl object-cover"
      />
      <div class="ml-4 flex-1">
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center space-x-2">
              <h3 class="text-lg font-semibold text-gray-900">{job.title}</h3>
              {#if job.featured}
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Featured
                </span>
              {/if}
            </div>
            <div class="flex items-center space-x-4 mt-2">
              <div class="flex items-center text-gray-500">
                <Building2 class="h-4 w-4 mr-1" />
                <span class="text-sm">{job.company}</span>
              </div>
              <div class="flex items-center text-gray-500">
                <MapPin class="h-4 w-4 mr-1" />
                <span class="text-sm">{job.location}</span>
              </div>
              <div class="flex items-center text-gray-500">
                <Clock class="h-4 w-4 mr-1" />
                <span class="text-sm">{job.posted}</span>
              </div>
            </div>
            <p class="mt-3 text-gray-600 text-sm line-clamp-2">{job.summary}</p>
          </div>
          <button
            on:click={onSave}
            class="p-2 rounded-lg transition-colors {saved ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'}"
          >
            <Bookmark class="h-5 w-5" />
          </button>
        </div>
        <div class="mt-4">
          <div class="flex items-center space-x-2 mb-4">
            {#each job.skills as skill}
              <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            {/each}
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {job.type}
              </span>
              <span class="text-sm font-medium text-gray-900">{job.salary}</span>
            </div>
            <button
              on:click={onApply}
              class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <span class="text-sm font-medium">Apply Now</span>
              <ChevronRight class="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>