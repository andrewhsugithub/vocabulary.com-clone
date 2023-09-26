import { Icons } from "@/components/Icons";
import { LucideProps } from "lucide-react";

export const tabs: tab[] = [
  {
    text: "Learn",
    link: "/play",
    linkTitle: "Learn",
    Icon: ({ ...props }: LucideProps) => <Icons.learn {...props} />,
  },
  {
    text: "Dictionary",
    link: "/dictionary",
    linkTitle: "search",
    Icon: ({ ...props }: LucideProps) => <Icons.search {...props} />,
  },
  {
    text: "Vocabulary Lists",
    link: "/lists",
    linkTitle: "list",
    Icon: ({ ...props }: LucideProps) => <Icons.list {...props} />,
  },
  {
    text: "VocabTrainer™",
    link: "/vocabtrainer",
    linkTitle: "trainer",
    Icon: ({ ...props }: LucideProps) => <Icons.trainer {...props} />,
  },
];
