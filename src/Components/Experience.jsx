import { motion } from "framer-motion";

const experiences = [
  {
    company: "Chevron",
    role: "Software Engineering Intern",
    period: "May 2025 - August 2025",
    logo: "https://1000logos.net/wp-content/uploads/2017/12/Chevron-Logo.png",
    description: [
      "Saved 8,000 engineering hours annually by architecting and deploying a rule-based model that automated the sorting and relevancy ranking of P&IDs.",
      "Developed a scalable ETL pipeline using Databricks and PySpark to consolidate diverse data sources and securely transfer payloads to a third-party partner.",
      "Optimized a feature in a critical data pipeline to achieve a 90% improvement in processing speed, substantially lowering cloud compute costs."
    ],
    skills: ["Azure Databricks", "PySpark", "ETL", "Python", "Azure Data Factory", "Azure DevOps", "Agile Workflow"]
  },
  {
    company: "Shell",
    role: "Data Engineering Intern",
    period: "January 2025 - May 2025",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png",
    description: [
      "Designed and implemented a database solution to manage structured and unstructured data for an end-to-end image processing pipeline.",
      "Integrated a Computer Vision model into a dockerized Flask application for user interaction.",
      "Applied image compressing techniques to save memory performance and reduce costs by 15% in Azure SQL Database and Blob Storage."
    ],
    skills: ["Azure Blob Storage", "Azure SQL Database", "Azure Functions", "Docker", "Flask", "Computer Vision", "SQL", "Python", "OpenAI API"]
  },
  {
    company: "LSU Information Technology Services",
    role: "Student Software Developer",
    period: "January 2024 - Present",
    logo: "https://pbs.twimg.com/profile_images/1640787019432595457/eKdwaf_8_400x400.jpg",
    description: [
      "Contributed to development of six web services offered to over 40,000 students and 500+ faculty.",
      "Worked on solutions mapping student mainframe data to Workday for production-grade applications.",
      "Adapted to changing business requirements to deliver new features and enhancements."
    ],
    skills: ["Spring Boot", "ASP.NET", "Webpack", "npm", "GitLab", "C#", "Java", "SQL Server"]
  }
];

export default function Experience() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-green-50"
            style={{padding: "32px"}}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-center justify-center">
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-green-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full font-medium border border-green-100"
                      style={{padding: "6px"}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
