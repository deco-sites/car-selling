import { Airtable } from "site/types/airtable.ts";
import LeadForm from "site/islands/LeadForm.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Placeholders {
  /** @description Texto do botão de envio */
  submitButtonText?: string;
  /** @description Campo de nome */
  nome: string;
  /** @description Campo de email */
  email: string;
  /** @description Campo de telefone */
  telefone: string;
  /** @description Campo de marca */
  marca: string;
  /** @description Campo de modelo */
  modelo: string;
  /** @description Campo de ano */
  ano: string;
}
export interface Props {
  title?: string;
  description?: string;
  /** @description Dados do Airtable para integração do formulário */
  airtable?: Airtable;
  successMessage?: string;
  bannerImage?: ImageWidget;
  maxBannerHeight?: number;
  placeholders?: Placeholders;
}

function HeroLeadCapture({
  title = "",
  description = "",
  airtable,
  successMessage = "Sucesso! Nossa equipe entrará em contato.",
  bannerImage,
  maxBannerHeight = 400,
  placeholders = {
    submitButtonText: "Avançar",
    nome: "Nome",
    email: "E-mail",
    telefone: "Telefone",
    marca: "Marca",
    modelo: "Modelo",
    ano: "Ano",
  },
}: Props) {
  return (
    <div class="w-full relative">
      {bannerImage && (
        <Image
          class="w-full object-cover"
          width={765}
          height={510}
          src={bannerImage}
          style={{
            maxHeight: `${maxBannerHeight}px`,
          }}
        />
      )}
      <div class="w-full mx-auto px-4 max-w-[1140px] flex flex-col md:flex-row mt-5 md:mt-20 gap-4 md:gap-32">
        <div class="flex flex-col w-full md:w-1/2">
          <h1
            class="text-4xl lg:text-[55px] leading-tight mb-7"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            class="text-xl"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div class="w-full md:w-1/2">
          <LeadForm
            airtable={airtable}
            successMessage={successMessage}
            placeholders={placeholders}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroLeadCapture;
