import Experience from "../components/experience";
import { NextPage } from "next";

const ExperienceSection: NextPage = () => {
  return (
    <section className="flex m-auto h-screen" id="experience">
      <div className="flex-col m-auto w-full">
        <Experience
          date="2020 Jan - Today"
          companyAndRole="LogMeIn - Software developer engineer in test"
          tasks={[
            "Creating automated test with TypeScript and WebdriverIO",
            "Documentation with TestRail",
            "Manual testing",
          ]}
        />
        <Experience
          date="2020 Apr - 2020 Dec"
          companyAndRole="KPMG - Quality Assurance Engineer"
          tasks={[
            "Test automation with selenium",
            "Manual testing",
            "Documentation",
          ]}
        />
        <Experience
          date="2018 Nov - 2020 Mar"
          companyAndRole="Circeo - Test engineer"
          tasks={[
            "Automatization with selenium with java",
            "Test documentation with Testrail",
            "Manual testing",
          ]}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
