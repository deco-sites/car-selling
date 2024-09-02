import { Airtable } from "site/types/airtable.ts";
import LeadForm from "site/islands/LeadForm.tsx";

export interface Props {
  title?: string;
  description?: string;
  /** @description Dados do Airtable para integração do formulário */
  airtable?: Airtable;
  successMessage?: string;
}

function HeroLeadCapture({
  title = "",
  description = "",
  airtable,
  successMessage = "Sucesso! Nossa equipe entrará em contato.",
}: Props) {
  return (
    <div class="w-full mx-auto px-4 max-w-[1140px] flex flex-col md:flex-row mt-5 md:mt-20 gap-4 md:gap-32">
      <div class="flex flex-col w-full md:w-1/2">
        <h1
          class="text-4xl lg:text-[55px] leading-tight mb-7"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p class="text-xl" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div class="w-full md:w-1/2">
        <LeadForm airtable={airtable} successMessage={successMessage} />
      </div>
    </div>
  );
}

export default HeroLeadCapture;
