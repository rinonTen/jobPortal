<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import SearchHero from '$lib/components/SearchHero.svelte';
  import JobFilters from '$lib/components/JobFilters.svelte';
  import JobCard from '$lib/components/JobCard.svelte';
  import JobDetails from '$lib/components/JobDetails.svelte';

  let selectedJob: number | null = null;
  let savedJobs = new Set<number>();
  let salaryRange = 100000;

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
  <Header savedJobsCount={savedJobs.size} />
  <SearchHero />

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex gap-8">
      <JobFilters bind:salaryRange />

      <div class="flex-1">
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
            <JobCard
              {job}
              {index}
              saved={savedJobs.has(index)}
              onSave={() => toggleSaveJob(index)}
              onApply={() => selectedJob = index}
            />
          {/each}
        </div>
      </div>
    </div>
  </div>

  {#if selectedJob !== null}
    <JobDetails
      job={jobs[selectedJob]}
      onClose={() => selectedJob = null}
    />
  {/if}
</div>