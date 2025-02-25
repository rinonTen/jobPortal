<script lang="ts">
    import { fade, slide } from 'svelte/transition';
    import { X } from 'lucide-svelte';
    
    export let job: {
      title: string;
      company: string;
      logo: string;
      description: string;
      responsibilities: string[];
      requirements: string[];
    };
    export let onClose: () => void;
  </script>
  
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50" transition:fade>
    <div class="absolute inset-y-0 right-0 w-full max-w-2xl bg-white shadow-xl" transition:slide={{ duration: 300, axis: 'x' }}>
      <div class="h-full overflow-auto">
        <div class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-4">
              <img
                src={job.logo}
                alt={job.company}
                class="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <h2 class="text-2xl font-bold text-gray-900">{job.title}</h2>
                <p class="text-gray-600">{job.company}</p>
              </div>
            </div>
            <button
              on:click={onClose}
              class="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X class="h-6 w-6 text-gray-500" />
            </button>
          </div>
  
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p class="text-gray-600">{job.description}</p>
            </div>
  
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Responsibilities</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-600">
                {#each job.responsibilities as resp}
                  <li>{resp}</li>
                {/each}
              </ul>
            </div>
  
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Requirements</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-600">
                {#each job.requirements as req}
                  <li>{req}</li>
                {/each}
              </ul>
            </div>
  
            <div class="pt-6">
              <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                Apply for this position
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>