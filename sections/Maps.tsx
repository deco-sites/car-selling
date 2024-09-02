export interface Props {
  /** @description ID da seção para links de ancoragem */
  sectionId?: string;
  title?: string;
  /** @description Insira o iframe do Mapa **/
  map?: string;
}
function Maps({ sectionId = "unidades", title = "", map = "" }: Props) {
  return (
    <div id={sectionId} class="w-full mx-auto px-4 max-w-[1140px] mt-[100px]">
      <h2 class="text-4xl lg:text-[55px] leading-tight text-center">{title}</h2>
      <div
        class="flex justify-center items-center mt-5 md:mt-10"
        dangerouslySetInnerHTML={{ __html: map }}
      />
    </div>
  );
}

export default Maps;
