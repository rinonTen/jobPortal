<script lang="ts">
    export let salaryRange: number;
  
    function formatSalary(value: number): string {
      return value >= 1000 ? `$${value/1000}k` : `$${value}`;
    }
  </script>
  
  <div class="w-64 flex-shrink-0">
    <div class="bg-white rounded-xl p-6 shadow-sm sticky top-24">
      <h3 class="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
      
      <div class="space-y-6">
        <div>
          <h4 class="text-sm font-medium text-gray-700 mb-3">Job Type</h4>
          <div class="space-y-2">
            {#each ["Full-time", "Part-time", "Contract", "Remote"] as type}
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <span class="ml-2 text-sm text-gray-600">{type}</span>
              </label>
            {/each}
          </div>
        </div>
  
        <div>
          <h4 class="text-sm font-medium text-gray-700 mb-3">Experience Level</h4>
          <div class="space-y-2">
            {#each ["Entry Level", "Mid Level", "Senior Level", "Lead"] as level}
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <span class="ml-2 text-sm text-gray-600">{level}</span>
              </label>
            {/each}
          </div>
        </div>
  
        <div>
          <h4 class="text-sm font-medium text-gray-700 mb-3">Salary Range</h4>
          <input
            type="range"
            bind:value={salaryRange}
            min="30000"
            max="200000"
            step="10000"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div class="flex justify-between mt-2">
            <span class="text-sm text-gray-500">Min</span>
            <span class="text-sm font-medium text-blue-600">{formatSalary(salaryRange)}</span>
          </div>
        </div>
  
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors text-sm">
          Apply Filters
        </button>
      </div>
    </div>
  </div>