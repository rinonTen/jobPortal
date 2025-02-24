import React, { useState } from 'react';
import { Search, Briefcase, MapPin, Clock, Building2, ChevronRight, SlidersHorizontal, Bookmark, TrendingUp, Users, Zap, Award, X } from 'lucide-react';

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2 days ago",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=128&h=128&fit=crop",
    skills: ["React", "TypeScript", "Node.js"],
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
      "Expert knowledge of React and TypeScript",
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
  },
  {
    title: "DevOps Engineer",
    company: "Cloud Systems Inc",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $170k",
    posted: "3 days ago",
    logo: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=128&h=128&fit=crop",
    skills: ["AWS", "Docker", "Kubernetes"],
    featured: true,
    summary: "Help us build and maintain robust cloud infrastructure using cutting-edge technologies. Focus on automation, scalability, and reliability of our systems.",
    description: "We're looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. You'll work with our engineering teams to implement CI/CD pipelines, manage cloud resources, and ensure the reliability of our systems.",
    responsibilities: [
      "Design and implement cloud infrastructure",
      "Manage CI/CD pipelines",
      "Monitor system performance and reliability",
      "Implement security best practices",
      "Automate deployment processes"
    ],
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of AWS services",
      "Experience with Docker and Kubernetes",
      "Scripting skills (Python, Bash)",
      "Understanding of security best practices"
    ]
  }
];

const categories = [
  { icon: <TrendingUp className="h-5 w-5" />, name: "Technology", count: 1234 },
  { icon: <Users className="h-5 w-5" />, name: "Marketing", count: 567 },
  { icon: <Zap className="h-5 w-5" />, name: "Sales", count: 890 },
  { icon: <Award className="h-5 w-5" />, name: "Design", count: 432 }
];

function App() {
  const [savedJobs, setSavedJobs] = useState<Set<number>>(new Set());
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const toggleSaveJob = (index: number) => {
    setSavedJobs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                DreamCareer
              </h1>
            </div>
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Find Jobs</a>
              <a href="#" className="text-gray-500 hover:text-blue-600">Companies</a>
              <a href="#" className="text-gray-500 hover:text-blue-600">Resources</a>
              <a href="#" className="text-gray-500 hover:text-blue-600">Saved ({savedJobs.size})</a>
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Find Your Dream Job Today
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Discover opportunities that match your skills and aspirations
          </p>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 flex items-center space-x-4 w-full border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                <Search className="h-5 w-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Job title, skills, or keywords"
                  className="flex-1 focus:outline-none text-lg"
                />
              </div>
              <div className="flex-1 flex items-center space-x-4 w-full">
                <MapPin className="h-5 w-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  className="flex-1 focus:outline-none text-lg"
                />
              </div>
              <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-lg shadow-md">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} jobs</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Job Listings */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Latest Jobs</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Most Recent</option>
              <option>Most Relevant</option>
              <option>Salary: High to Low</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 transition-all duration-300 transform hover:scale-[1.02] ${
                job.featured ? 'border-2 border-blue-500 shadow-md' : 'shadow-sm'
              }`}
            >
              <div className="flex items-start">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center text-gray-500">
                          <Building2 className="h-4 w-4 mr-1" />
                          <span className="text-sm">{job.company}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{job.posted}</span>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm line-clamp-2">{job.summary}</p>
                    </div>
                    <button
                      onClick={() => toggleSaveJob(index)}
                      className={`p-2 rounded-lg transition-colors ${
                        savedJobs.has(index)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center space-x-2 mb-4">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {job.type}
                        </span>
                        <span className="text-sm font-medium text-gray-900">{job.salary}</span>
                      </div>
                      <button
                        onClick={() => setSelectedJob(index)}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <span className="text-sm font-medium">Apply Now</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Job Details Sidebar */}
      {selectedJob !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-y-0 left-0 w-full max-w-2xl bg-white shadow-xl">
            <div className="h-full overflow-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={jobs[selectedJob].logo}
                      alt={jobs[selectedJob].company}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{jobs[selectedJob].title}</h2>
                      <p className="text-gray-600">{jobs[selectedJob].company}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-600">{jobs[selectedJob].description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {jobs[selectedJob].responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {jobs[selectedJob].requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                      Apply for this position
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-xl">
            <div className="h-full overflow-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Job Type</h4>
                    <div className="space-y-2">
                      {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
                        <label key={type} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                          />
                          <span className="ml-2 text-sm text-gray-600">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Experience Level</h4>
                    <div className="space-y-2">
                      {["Entry Level", "Mid Level", "Senior Level", "Lead", "Executive"].map((level) => (
                        <label key={level} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                          />
                          <span className="ml-2 text-sm text-gray-600">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Salary Range</h4>
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="10000"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">$0</span>
                      <span className="text-sm text-gray-500">$200k+</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;