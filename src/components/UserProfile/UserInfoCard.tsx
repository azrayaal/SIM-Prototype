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
    <div className="p-6 border border-gray-200 rounded-2xl dark:border-gray-800">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90">
            Employee Profile
          </h3>
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
          </div>
        </div>
      </Card>

      {/* PERSONAL INFO */}
      <Card title="Personal Information">
        <Grid>
          <Info label="First Name" value="Musharof" />
          <Info label="Last Name" value="Chowdhury" />
          <Info label="Email" value="randomuser@pimjo.com" />
          <Info label="Phone" value="+09 363 398 46" />
          <Info label="Bio" value="Team Manager, tech enthusiast" />
          <Info label="Address" value="Jl. Sudirman No. 45, Jakarta" />
        </Grid>
      </Card>

      {/* EMPLOYMENT INFO */}
      <Card title="Employment Information">
        <Grid>
          <Info label="Department" value="Product Development" />
          <Info label="Position" value="Lead Engineer" />
          <Info label="Employment Type" value="Full-time" />
          <Info label="Start Date" value="01 March 2020" />
          <Info label="Contract End" value="N/A" />
          <Info label="Manager" value="John Doe" />
        </Grid>
      </Card>

      {/* HISTORY */}
      <Card title="Employment History">
        <Timeline
          items={[
            { year: "2020 – Present", text: "Lead Engineer · Pimjo" },
            { year: "2018 – 2020", text: "Senior Developer · TechNova" },
            { year: "2016 – 2018", text: "Software Engineer · DevCore" },
          ]}
        />
      </Card>

      {/* PROJECTS */}
      <Card title="Projects & Contributions">
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 space-y-1">
          <li>Next-gen HRIS platform (2021) – Project Lead</li>
          <li>AI-powered Analytics Dashboard (2022) – Core Developer</li>
          <li>Mobile App Redesign (2023) – UX & Integration</li>
        </ul>
      </Card>

      {/* TRAINING */}
      <Card title="Training & Certifications">
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 space-y-1">
          <li>AWS Certified Solutions Architect – 2021</li>
          <li>Scrum Master Certified – 2019</li>
          <li>React Advanced Workshop – 2018</li>
        </ul>
      </Card>

      {/* PERFORMANCE */}
      <Card title="Performance Overview">
        <Grid>
          <Info label="KPI Score (2024)" value="88%" />
          <Info label="Last Review" value="Exceeds Expectations" />
          <Info label="Promotion Eligibility" value="Yes (2025)" />
        </Grid>
      </Card>

      {/* SOCIAL */}
      <Card title="Social Links">
        <Grid>
          <Info label="Facebook" value="https://facebook.com/pimjo" />
          <Info label="LinkedIn" value="https://linkedin.com/company/pimjo" />
          <Info label="Instagram" value="https://instagram.com/pimjo" />
          <Info label="X.com" value="https://x.com/pimjo" />
        </Grid>
      </Card>

      {/* MODAL EDIT FORM */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[800px] m-4">
        <div className="p-6 bg-white rounded-2xl dark:bg-gray-900">
          <h4 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Edit Employee Profile
          </h4>
          <form className="space-y-8">
            <Section title="Personal Information">
              <InputRow label="First Name" value="Musharof" />
              <InputRow label="Last Name" value="Chowdhury" />
              <InputRow label="Email" value="randomuser@pimjo.com" />
              <InputRow label="Phone" value="+09 363 398 46" />
              <InputRow label="Address" value="Jl. Sudirman No. 45, Jakarta" />
            </Section>

            <Section title="Employment Information">
              <InputRow label="Department" value="Product Development" />
              <InputRow label="Position" value="Lead Engineer" />
              <InputRow label="Start Date" type="date" value="2020-03-01" />
              <InputRow label="Employment Type" value="Full-time" />
              <InputRow label="Manager" value="John Doe" />
            </Section>

            <Section title="Social Links">
              <InputRow label="Facebook" value="https://facebook.com/pimjo" />
              <InputRow
                label="LinkedIn"
                value="https://linkedin.com/company/pimjo"
              />
              <InputRow label="Instagram" value="https://instagram.com/pimjo" />
              <InputRow label="X.com" value="https://x.com/pimjo" />
            </Section>

            <div className="flex justify-end gap-3">
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
    <div className="p-4 mb-6 border border-gray-200 rounded-xl dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-800 dark:text-white/90">
        {title}
      </h5>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-800 dark:text-white/90">
        {value}
      </p>
    </div>
  );
}

function Timeline({ items }: { items: { year: string; text: string }[] }) {
  return (
    <div className="relative pl-4 border-l border-gray-300 dark:border-gray-600 space-y-4">
      {items.map((item, i) => (
        <div key={i}>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {item.year}
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-white/90">
            {item.text}
          </p>
        </div>
      ))}
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
      <h5 className="mb-3 text-lg font-medium text-gray-800 dark:text-white/90">
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
