<script lang="ts">
  import { Briefcase, Search, MapPin, Clock, Building2, ChevronRight, SlidersHorizontal, Bookmark, TrendingUp, Users, Zap, Award, X } from 'lucide-svelte';
  import { fade, slide } from 'svelte/transition';

  let showFilters = false;
  let selectedJob: number | null = null;
  let savedJobs = new Set<number>();

  const categories = [
    { icon: TrendingUp, name: "Technology", count: 1234 },
    { icon: Users, name: "Marketing", count: 567 },
    { icon: Zap, name: "Sales", count: 890 },
    { icon: Award, name: "Design", count: 432 }
  ];

  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=128&h=128&fit=crop",
      skills: ["SvelteKit", "TypeScript", "Node.js"],
      featured: true,
      summary: "Join our dynamic team to build innovative web applications using cutting-edge technologies. You'll be responsible for architecting and implementing complex frontend solutions that delight our users.",
      description: "We're looking for a Senior Frontend Developer to join our growing team. You'll work on challenging projects, mentor junior developers, and help shape our technical direction. The ideal candidate has strong experience with modern JavaScript frameworks and a passion for clean, maintainable code.",
      responsibilities: [
        "Lead frontend development for key projects",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with designers and backend teams",
        "Optimize application performance",
        "Implement responsive designs and ensure cross-browser compatibility"
      ],
      requirements: [
        "5+ years of frontend development experience",
        "Expert knowledge of SvelteKit and TypeScript",
        "Strong understanding of web performance optimization",
        "Experience with modern build tools and CI/CD pipelines",
        "Excellent communication and leadership skills"
      ]
    },
    {
      title: "UX/UI Designer",
      company: "Creative Studios",
      location: "Remote",
      type: "Contract",
      salary: "$90k - $120k",
      posted: "1 day ago",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=128&h=128&fit=crop",
      skills: ["Figma", "UI Design", "User Research"],
      featured: false,
      summary: "Create beautiful and intuitive user interfaces for our digital products. Work closely with product teams to deliver exceptional user experiences that drive engagement.",
      description: "We're seeking a talented UX/UI Designer to help create beautiful and functional digital experiences. You'll work on various projects, from web applications to mobile apps, ensuring our products are both visually appealing and user-friendly.",
      responsibilities: [
        "Create user-centered designs for web and mobile applications",
        "Conduct user research and usability testing",
        "Develop wireframes and prototypes",
        "Collaborate with developers to ensure design feasibility",
        "Maintain and evolve our design system"
      ],
      requirements: [
        "3+ years of UX/UI design experience",
        "Strong portfolio demonstrating UI design skills",
        "Proficiency with Figma and other design tools",
        "Experience with user research and testing",
        "Excellent communication skills"
      ]
    }
  ];

  function toggleSaveJob(index: number) {
    savedJobs = new Set(savedJobs);
    if (savedJobs.has(index)) {
      savedJobs.delete(index);
    } else {
      savedJobs.add(index);
    }
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
  <!-- Header -->
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
          <a href="#" class="text-gray-500 hover:text-blue-600">Saved ({savedJobs.size})</a>
          <button
            on:click={() => showFilters = true}
            class="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <SlidersHorizontal class="h-4 w-4" />
            <span>Filters</span>
          </button>
        </nav>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl font-bold text-white mb-4">
        Find Your Dream Job Today
      </h2>
      <p class="text-blue-100 mb-8 text-lg">
        Discover opportunities that match your skills and aspirations
      </p>
      <div class="bg-white rounded-xl shadow-lg p-4 md:p-6 max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
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

  <!-- Categories -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      {#each categories as category, index}
        <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <div class="flex items-center space-x-4">
            <div class="bg-blue-100 p-3 rounded-lg">
              <svelte:component this={category.icon} class="h-5 w-5" />
            </div>
            <div>
              <h3 class="font-medium text-gray-900">{category.name}</h3>
              <p class="text-sm text-gray-500">{category.count} jobs</p>
            </div>
          </div>
        </div>
      {/each}
      }
    </div>
  </div>

  <!-- Main Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Job Listings -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-semibold text-gray-900">Latest Jobs</h2>
      <div class="flex items-center space-x-2">
        <span class="text-sm text-gray-500">Sort by:</span>
        <select class="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Most Recent</option>
          <option>Most Relevant</option>
          <option>Salary: High to Low</option>
        </select>
      </div>
    </div>

    <div class="space-y-4">
      {#each jobs as job, index}
        <div
          class="bg-white rounded-xl p-6 transition-all duration-300 transform hover:scale-[1.02] {job.featured ? 'border-2 border-blue-500 shadow-md' : 'shadow-sm'}"
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
                    }
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
                  on:click={() => toggleSaveJob(index)}
                  class="p-2 rounded-lg transition-colors {savedJobs.has(index) ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'}"
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
                  }
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-4">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {job.type}
                    </span>
                    <span class="text-sm font-medium text-gray-900">{job.salary}</span>
                  </div>
                  <button
                    on:click={() => selectedJob = index}
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
      {/each}
      }
    </div>
  </main>

  <!-- Job Details Sidebar -->
  {#if selectedJob !== null}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50" transition:fade>
      <div class="absolute inset-y-0 right-0 w-full max-w-2xl bg-white shadow-xl" transition:slide={{ duration: 300, axis: 'x' }}>
        <div class="h-full overflow-auto">
          <div class="p-6">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-4">
                <img
                  src={jobs[selectedJob].logo}
                  alt={jobs[selectedJob].company}
                  class="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h2 class="text-2xl font-bold text-gray-900">{jobs[selectedJob].title}</h2>
                  <p class="text-gray-600">{jobs[selectedJob].company}</p>
                </div>
              </div>
              <button
                on:click={() => selectedJob = null}
                class="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X class="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p class="text-gray-600">{jobs[selectedJob].description}</p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Responsibilities</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  {#each jobs[selectedJob].responsibilities as resp}
                    <li>{resp}</li>
                  {/each}
                  }
                </ul>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Requirements</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  {#each jobs[selectedJob].requirements as req}
                    <li>{req}</li>
                  {/each}
                  }
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
  {/if}
  }

  <!-- Filters Modal -->
  {#if showFilters}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50" transition:fade>
      <div class="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-xl" transition:slide={{ duration: 300, axis: 'x' }}>
        <div class="h-full overflow-auto">
          <div class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-semibold text-gray-900">Filters</h3>
              <button
                on:click={() => showFilters = false}
                class="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X class="h-6 w-6 text-gray-500" />
              </button>
            </div>

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
                  }
                </div>
              </div>

              <div>
                <h4 class="text-sm font-medium text-gray-700 mb-3">Experience Level</h4>
                <div class="space-y-2">
                  {#each ["Entry Level", "Mid Level", "Senior Level", "Lead", "Executive"] as level}
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        class="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <span class="ml-2 text-sm text-gray-600">{level}</span>
                    </label>
                  {/each}
                  }
                </div>
              </div>

              <div>
                <h4 class="text-sm font-medium text-gray-700 mb-3">Salary Range</h4>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="10000"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div class="flex justify-between mt-2">
                  <span class="text-sm text-gray-500">$0</span>
                  <span class="text-sm text-gray-500">$200k+</span>
                </div>
              </div>

              <div class="pt-6">
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
  }
</div>