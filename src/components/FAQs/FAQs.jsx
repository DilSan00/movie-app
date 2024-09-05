import styles from "./FAQs.module.css";
import SectionContainer from "../../containers/SectionContainer";
import SectionTitle from "@/shared/components/SectionTitle/SectionTitle";
import Button from "@/shared/components/Button/Button";
import QuestionCard from "@/shared/components/QuestionCard/QuestionCard";


const FAQs = () => {
  const questionData = [
    {
      id: "01",
      title: "What is StreamVibe?",
      description: `
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
      `,
      isQuestion: false,
    },
    {
      id: "02",
      title: "How much does StreamVibe cost?",
      description: `
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
      `,
      isQuestion: false,
    },
    {
      id: "03",
      title: "What content is available on StreamVibe?",
      description: `
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
      `,
      isQuestion: false,
    },
    {
      id: "04",
      title: "How can I watch StreamVibe?",
      description: `
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
      `,
      isQuestion: false,
    },
    {
      id: "05",
      title: "How do I sign up for StreamVibe?",
      description: `
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
      `,
      isQuestion: false,
    },
    {
      id: "06",
      title: "What is the StreamVibe free trial?",
      description: `
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
      `,
      isQuestion: false,
    },
    {
      id: "07",
      title: "How do I contact StreamVibe customer support?",
      description: `
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
      `,
      isQuestion: false,
    },
    {
      id: "08",
      title: "What are the StreamVibe payment methods?",
      description: `
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
      `,
      isQuestion: false,
    },
  ];

  const firstColumn = questionData.slice(0, 4);
  const secondColumn = questionData.slice(4);

  return (
    <SectionContainer>
      <div className={styles.fagsContainer}>
        <SectionTitle
          title={"Frequently Asked Questions"}
          description={`
            Got questions? We've got answers! Check out our FAQ 
            section to find answers to the most common questions about StreamVibe.
          `}
        >
          <Button>Ask a Question</Button>
        </SectionTitle>

        <div className={styles.questionBlock}>
          <div>
            {firstColumn.map((question) => {
              return (
                <QuestionCard
                  id={question.id}
                  title={question.title}
                  description={question.description}
                />
              );
            })}
          </div>

          <div>
            {secondColumn.map((question) => {
              return (
                <QuestionCard
                  id={question.id}
                  title={question.title}
                  description={question.description}
                />
              );
            })}
          </div>

        </div>
      </div>
    </SectionContainer>
  );
};

export default FAQs;