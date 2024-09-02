import { Airtable } from "site/types/airtable.ts";
import CompleteLeadForm from "site/islands/CompleteLeadForm.tsx";

export interface Props {
  /** @description ID da seção para links de ancoragem */
  sectionId?: string;
  title?: string;
  /** @description Dados do Airtable para integração do formulário */
  airtable?: Airtable;
  successMessage?: string;
}

function LeadCapture({
  sectionId = "contato",
  title,
  airtable,
  successMessage = "Sucesso! Nossa equipe entrará em contato.",
}: Props) {
  return (
    <div
      id={sectionId}
      class="w-full mx-auto px-4 max-w-[1140px] mt-[100px] flex flex-col"
    >
      <h2 class="text-3xl lg:text-5xl leading-tight text-center">{title}</h2>

      <div class="mt-5 md:mt-10">
        <CompleteLeadForm airtable={airtable} successMessage={successMessage} />
      </div>
    </div>
  );
}

export default LeadCapture;
