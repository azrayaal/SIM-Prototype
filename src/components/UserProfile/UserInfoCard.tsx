import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function Employee360Card() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleSave = () => {
    console.log("Saving profile...");
    closeModal();
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-1">
            Musharof Chowdhury
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Comprehensive employee details and history
          </p>
        </div>
        <Button onClick={openModal} size="sm">
          Edit Profile
        </Button>
      </div>

      {/* PROFILE OVERVIEW */}
      <Card title="Profile Overview">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100"
            alt="avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">
              Musharof Chowdhury
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Lead Engineer · Product Development
            </p>
            <div className="flex gap-2 mt-1">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-800/40 dark:text-blue-400">
                Active
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-800/40 dark:text-green-400">
                Full-time
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* PERSONAL INFO */}
      <Card title="Personal Information">
        <Grid>
          <Info label="Full Name" value="Musharof Chowdhury" />
          <Info label="Gender" value="Male" />
          <Info label="Date of Birth" value="15 April 1985" />
          <Info label="Place of Birth" value="Jakarta" />
          <Info label="Marital Status" value="Married" />
          <Info label="Nationality" value="Indonesian" />
          <Info label="Religion" value="Islam" />
          <Info label="Email" value="musharof.chowdhury@pimjo.com" />
          <Info label="Phone" value="+62 812 3456 7890" />
          <Info
            label="Emergency Contact"
            value="+62 813 9876 5432 (Siti Aminah - Spouse)"
          />
          <Info label="Bio" value="Team Manager, tech enthusiast" />
          <Info
            label="Address"
            value="Jl. Sudirman No. 45, Jakarta Selatan 12190"
          />
        </Grid>
      </Card>

      {/* IDENTIFICATION */}
      <Card title="Identification Documents">
        <Grid>
          <Info label="NIK" value="3174031504850001" />
          <Info label="KK Number" value="3174031504850002" />
          <Info label="NPWP" value="123456789012345" />
          <Info label="Passport Number" value="A12345678" />
          <Info label="Passport Expiry" value="15 April 2030" />
          <Info label="Driver's License" value="SIM A - 123456789012" />
        </Grid>
      </Card>

      {/* BPJS & INSURANCE */}
      <Card title="BPJS & Insurance">
        <Grid>
          <Info label="BPJS Kesehatan Number" value="0001234567890" />
          <Info label="BPJS Ketenagakerjaan Number" value="1001234567890" />
          <Info label="BPJS Kesehatan Status" value="Active" />
          <Info label="BPJS Ketenagakerjaan Status" value="Active" />
          <Info
            label="Private Health Insurance"
            value="AXA Financial - 7890123456"
          />
          <Info label="Life Insurance" value="Manulife - 3456789012" />
        </Grid>

        {/* BPJS CONTRIBUTION */}
        <div className="mt-6">
          <h6 className="mb-3 text-sm font-semibold text-gray-700 dark:text-white/80">
            BPJS Contribution
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                BPJS Kesehatan
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Rp 150.000 / month
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                BPJS Ketenagakerjaan
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Rp 217.500 / month
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* BANK INFORMATION */}
      <Card title="Bank Information">
        <Grid>
          <Info label="Bank Name" value="Bank Central Asia (BCA)" />
          <Info label="Account Number" value="1234567890" />
          <Info label="Account Holder" value="Musharof Chowdhury" />
          <Info label="Bank Branch" value="BCA Sudirman Jakarta" />
          <Info label="Salary Account" value="Yes" />
          <Info label="Account Type" value="Savings" />
        </Grid>
      </Card>

      {/* EMPLOYMENT INFO */}
      <Card title="Employment Information">
        <Grid>
          <Info label="Employee ID" value="EMP-2020-001" />
          <Info label="Department" value="Product Development" />
          <Info label="Position" value="Lead Engineer" />
          <Info label="Employment Type" value="Full-time" />
          <Info label="Employment Status" value="Permanent" />
          <Info label="Join Date" value="01 March 2020" />
          <Info label="Manager" value="John Doe" />
          <Info label="HR Manager" value="Sarah Johnson" />
          <Info label="Work Location" value="Head Office - Jakarta" />
          <Info label="Work Schedule" value="Monday - Friday, 09:00 - 18:00" />
        </Grid>

        {/* CONTRACT DETAILS */}
        <div className="mt-6">
          <h6 className="mb-2 text-sm font-semibold text-gray-700 dark:text-white/80">
            Contract Details
          </h6>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Contract Period
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                01 March 2020 – 01 March 2025
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Remaining Time
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                5 months left
              </p>
            </div>
            <div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-800/40 dark:text-green-400">
                Active
              </span>
            </div>
          </div>

          {/* Timeline Progress */}
          <div className="mt-4 relative">
            <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: "80%" }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>01 Mar 2020</span>
              <span>01 Mar 2025</span>
            </div>
          </div>
        </div>
      </Card>

      {/* COMPENSATION */}
      <Card title="Compensation & Benefits">
        <Grid>
          <Info label="Basic Salary" value="Rp 25.000.000" />
          <Info label="Allowances" value="Rp 5.000.000" />
          <Info label="Total Gross Salary" value="Rp 30.000.000" />
          <Info label="Tax Status" value="TK/0" />
          <Info label="PTKP Category" value="K/1 (Married with 1 child)" />
          <Info label="PPH 21 per Month" value="Rp 1.500.000" />
          <Info label="Take Home Pay" value="Rp 23.200.000" />
          <Info label="Bonus Type" value="Annual + Performance" />
        </Grid>

        {/* BENEFITS */}
        <div className="mt-4">
          <h6 className="mb-2 text-sm font-semibold text-gray-700 dark:text-white/80">
            Additional Benefits
          </h6>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-800/40 dark:text-blue-400">
              Health Insurance
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-800/40 dark:text-green-400">
              Life Insurance
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-800/40 dark:text-purple-400">
              Meal Allowance
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-800/40 dark:text-yellow-400">
              Transportation
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-800/40 dark:text-indigo-400">
              Internet Allowance
            </span>
          </div>
        </div>
      </Card>

      {/* HISTORY */}
      <Card title="Employment History">
        <Timeline
          items={[
            {
              year: "2020 – Present",
              text: "Lead Engineer · Pimjo",
              duration: "4 years 2 months",
              location: "Jakarta, Indonesia",
            },
            {
              year: "2018 – 2020",
              text: "Senior Developer · TechNova",
              duration: "2 years",
              location: "Bandung, Indonesia",
            },
            {
              year: "2016 – 2018",
              text: "Software Engineer · DevCore",
              duration: "2 years",
              location: "Surabaya, Indonesia",
            },
            {
              year: "2014 – 2016",
              text: "Junior Developer · CodeCraft",
              duration: "2 years",
              location: "Jakarta, Indonesia",
            },
          ]}
        />
      </Card>

      {/* EDUCATION */}
      <Card title="Education Background">
        <Timeline
          items={[
            {
              year: "2012 – 2014",
              text: "Master of Computer Science · University of Indonesia",
              duration: "2 years",
              location: "Depok, Indonesia",
            },
            {
              year: "2008 – 2012",
              text: "Bachelor of Computer Science · Bandung Institute of Technology",
              duration: "4 years",
              location: "Bandung, Indonesia",
            },
            {
              year: "2005 – 2008",
              text: "Natural Science · SMA Negeri 8 Jakarta",
              duration: "3 years",
              location: "Jakarta, Indonesia",
            },
          ]}
        />
      </Card>

      {/* PROJECTS */}
      <Card title="Projects & Contributions">
        <div className="space-y-4">
          <ProjectItem
            year="2023"
            title="Mobile App Redesign"
            role="UX & Integration Lead"
            status="Completed"
            description="Led the redesign of company mobile application with modern UI/UX and improved performance"
          />
          <ProjectItem
            year="2022"
            title="AI-powered Analytics Dashboard"
            role="Core Developer"
            status="Completed"
            description="Developed real-time analytics dashboard with machine learning capabilities for business insights"
          />
          <ProjectItem
            year="2021"
            title="Next-gen HRIS Platform"
            role="Project Lead"
            status="Completed"
            description="Managed the development of comprehensive HR information system serving 5000+ employees"
          />
          <ProjectItem
            year="2020"
            title="Internal Tools Migration"
            role="Technical Lead"
            status="Completed"
            description="Oversaw migration from legacy systems to modern microservices architecture"
          />
        </div>
      </Card>

      {/* TRAINING */}
      <Card title="Training & Certifications">
        <div className="space-y-3">
          <CertificationItem
            name="AWS Certified Solutions Architect"
            issuer="Amazon Web Services"
            year="2021"
            validity="2024"
          />
          <CertificationItem
            name="Scrum Master Certified"
            issuer="Scrum Alliance"
            year="2019"
            validity="2023"
          />
          <CertificationItem
            name="React Advanced Workshop"
            issuer="Meta (Facebook)"
            year="2018"
            validity="Lifetime"
          />
          <CertificationItem
            name="Google Cloud Professional Developer"
            issuer="Google Cloud"
            year="2022"
            validity="2025"
          />
          <CertificationItem
            name="Leadership Development Program"
            issuer="Pimjo Academy"
            year="2021"
            validity="Lifetime"
          />
        </div>
      </Card>

      {/* PERFORMANCE */}
      <Card title="Performance Overview">
        <Grid>
          <Info label="KPI Score (2024)" value="88%" />
          <Info label="Last Review Date" value="15 January 2024" />
          <Info label="Performance Rating" value="Exceeds Expectations" />
          <Info label="Promotion Eligibility" value="Yes (2025)" />
          <Info label="Next Review Date" value="15 July 2024" />
          <Info label="Career Path" value="Engineering Manager" />
        </Grid>

        {/* PERFORMANCE HISTORY */}
        <div className="mt-4">
          <h6 className="mb-3 text-sm font-semibold text-gray-700 dark:text-white/80">
            Performance History
          </h6>
          <div className="space-y-2">
            <PerformanceItem year="2023" rating="85%" trend="up" />
            <PerformanceItem year="2022" rating="82%" trend="up" />
            <PerformanceItem year="2021" rating="78%" trend="up" />
            <PerformanceItem year="2020" rating="75%" trend="stable" />
          </div>
        </div>
      </Card>

      {/* SKILLS */}
      <Card title="Skills & Competencies">
        <div className="space-y-4">
          <SkillCategory
            title="Technical Skills"
            skills={[
              { name: "JavaScript/TypeScript", level: 90 },
              { name: "React/Next.js", level: 85 },
              { name: "Node.js", level: 80 },
              { name: "AWS Cloud", level: 75 },
              { name: "Python", level: 70 },
              { name: "Database Design", level: 85 },
            ]}
          />

          <SkillCategory
            title="Soft Skills"
            skills={[
              { name: "Leadership", level: 88 },
              { name: "Communication", level: 82 },
              { name: "Problem Solving", level: 90 },
              { name: "Team Management", level: 85 },
              { name: "Project Management", level: 80 },
            ]}
          />
        </div>
      </Card>

      {/* SOCIAL */}
      <Card title="Social Links">
        <Grid>
          <SocialLink
            label="LinkedIn"
            value="https://linkedin.com/in/musharof-chowdhury"
          />
          <SocialLink label="GitHub" value="https://github.com/musharof" />
          <SocialLink label="Portfolio" value="https://musharof.dev" />
          <SocialLink
            label="Facebook"
            value="https://facebook.com/musharof.chowdhury"
          />
          <SocialLink
            label="Instagram"
            value="https://instagram.com/musharof"
          />
          <SocialLink label="X.com" value="https://x.com/musharof" />
        </Grid>
      </Card>

      {/* MODAL EDIT FORM */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[800px] m-4">
        <div className="p-6 bg-white rounded-2xl dark:bg-gray-900 max-h-[90vh] overflow-y-auto">
          <h4 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edit Employee Profile
          </h4>
          <form className="space-y-8">
            <Section title="Personal Information">
              <InputRow label="First Name" value="Musharof" />
              <InputRow label="Last Name" value="Chowdhury" />
              <InputRow label="Date of Birth" type="date" value="1985-04-15" />
              <InputRow label="Place of Birth" value="Jakarta" />
              <InputRow label="Gender" value="Male" />
              <InputRow label="Marital Status" value="Married" />
              <InputRow label="Email" value="musharof.chowdhury@pimjo.com" />
              <InputRow label="Phone" value="+62 812 3456 7890" />
              <InputRow label="Emergency Contact" value="+62 813 9876 5432" />
              <InputRow
                label="Address"
                value="Jl. Sudirman No. 45, Jakarta Selatan"
              />
            </Section>

            <Section title="Identification">
              <InputRow label="NIK" value="3174031504850001" />
              <InputRow label="KK Number" value="3174031504850002" />
              <InputRow label="NPWP" value="123456789012345" />
              <InputRow label="Passport Number" value="A12345678" />
              <InputRow
                label="Passport Expiry"
                type="date"
                value="2030-04-15"
              />
            </Section>

            <Section title="BPJS & Insurance">
              <InputRow label="BPJS Kesehatan Number" value="0001234567890" />
              <InputRow
                label="BPJS Ketenagakerjaan Number"
                value="1001234567890"
              />
              <InputRow
                label="Private Health Insurance"
                value="AXA Financial - 7890123456"
              />
              <InputRow label="Life Insurance" value="Manulife - 3456789012" />
            </Section>

            <Section title="Bank Information">
              <InputRow label="Bank Name" value="Bank Central Asia (BCA)" />
              <InputRow label="Account Number" value="1234567890" />
              <InputRow label="Account Holder" value="Musharof Chowdhury" />
              <InputRow label="Bank Branch" value="BCA Sudirman Jakarta" />
            </Section>

            <Section title="Employment Information">
              <InputRow label="Employee ID" value="EMP-2020-001" />
              <InputRow label="Department" value="Product Development" />
              <InputRow label="Position" value="Lead Engineer" />
              <InputRow label="Employment Type" value="Full-time" />
              <InputRow label="Manager" value="John Doe" />
              <InputRow label="Work Location" value="Head Office - Jakarta" />
            </Section>

            <Section title="Contract Details">
              <InputRow label="Start Date" type="date" value="2020-03-01" />
              <InputRow label="End Date" type="date" value="2025-03-01" />
              <InputRow label="Status" value="Active" />
            </Section>

            <Section title="Social Links">
              <InputRow
                label="LinkedIn"
                value="https://linkedin.com/in/musharof-chowdhury"
              />
              <InputRow label="GitHub" value="https://github.com/musharof" />
              <InputRow label="Portfolio" value="https://musharof.dev" />
            </Section>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="outline" size="sm" onClick={closeModal}>
                Cancel
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

/* HELPERS */
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 mb-6 border border-gray-200 rounded-xl dark:border-gray-700">
      <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
        {title}
      </h5>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</p>
      <p className="text-sm font-medium text-gray-800 dark:text-white/90">
        {value}
      </p>
    </div>
  );
}

function SocialLink({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</p>
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 break-all"
      >
        {value}
      </a>
    </div>
  );
}

function Timeline({
  items,
}: {
  items: { year: string; text: string; duration?: string; location?: string }[];
}) {
  return (
    <div className="relative pl-4 border-l border-gray-300 dark:border-gray-600 space-y-6">
      {items.map((item, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-[21px] w-3 h-3 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {item.year}
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-white/90 mb-1">
            {item.text}
          </p>
          <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
            {item.duration && <span>{item.duration}</span>}
            {item.location && <span>{item.location}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectItem({
  year,
  title,
  role,
  status,
  description,
}: {
  year: string;
  title: string;
  role: string;
  status: string;
  description: string;
}) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            {year}
          </p>
          <h6 className="text-sm font-semibold text-gray-800 dark:text-white/90">
            {title}
          </h6>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-800/40 dark:text-green-400 mt-1 md:mt-0">
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
}

function CertificationItem({
  name,
  issuer,
  year,
  validity,
}: {
  name: string;
  issuer: string;
  year: string;
  validity: string;
}) {
  return (
    <div className="flex items-start justify-between p-3 border border-gray-200 rounded-lg dark:border-gray-700">
      <div>
        <h6 className="text-sm font-semibold text-gray-800 dark:text-white/90">
          {name}
        </h6>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {issuer} · {year}
        </p>
      </div>
      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-800/40 dark:text-blue-400">
        Valid until {validity}
      </span>
    </div>
  );
}

function PerformanceItem({
  year,
  rating,
  trend,
}: {
  year: string;
  rating: string;
  trend: "up" | "down" | "stable";
}) {
  const trendIcons = {
    up: "↗",
    down: "↘",
    stable: "→",
  };

  const trendColors = {
    up: "text-green-600 dark:text-green-400",
    down: "text-red-600 dark:text-red-400",
    stable: "text-yellow-600 dark:text-yellow-400",
  };

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-700 dark:text-gray-300">{year}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-800 dark:text-white/90">
          {rating}
        </span>
        <span className={`text-sm ${trendColors[trend]}`}>
          {trendIcons[trend]}
        </span>
      </div>
    </div>
  );
}

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; level: number }[];
}) {
  return (
    <div>
      <h6 className="text-sm font-semibold text-gray-700 dark:text-white/80 mb-3">
        {title}
      </h6>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h5 className="mb-4 text-lg font-medium text-gray-800 dark:text-white/90 border-b border-gray-200 dark:border-gray-700 pb-2">
        {title}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function InputRow({
  label,
  value,
  type = "text",
}: {
  label: string;
  value: string;
  type?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <Input type={type} value={value} />
    </div>
  );
}
