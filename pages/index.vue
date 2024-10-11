<template>
    <div class="h-100  " style="overflow-x: hidden; background-color: #838595; ">
        <main style="position: relative;">
            <MarcaPred /> 
            <Banner />
            <MciPrincipal /> 
            <ServicosPrincipal />
            <VisaoPrincipal />
            <ParceriasPrincipal />
            <section class="bg-grey-lighten-5">
                <historia  style="position: relative; z-index: 10;"/>
                <SobrePagePrincipal style="position: relative; z-index: 10;"/>
            </section>
            <FormularioPrincipal />
        </main>
    </div>
</template>

<script setup>
  useSeoMeta({
    title: 'Pred Engenharia',
    ogTitle: 'Pred Engenharia',
    description: 'A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos, com foco na garantia da segurança, confiabilidade e produtividade das atividades. Atuando na indústria e na área de serviços desde 1993, suas inovadoras soluções são fornecidas ao mercado através de três áreas de negócios: Serviços Técnicos, Tecnologia da Informação e Automação Industrial.',
    ogDescription: 'A Pred Engenharia é uma provedora de soluções para gestão de ativos e processos, com foco na garantia da segurança, confiabilidade e produtividade das atividades. Atuando na indústria e na área de serviços desde 1993, suas inovadoras soluções são fornecidas ao mercado através de três áreas de negócios: Serviços Técnicos, Tecnologia da Informação e Automação Industrial.',
    ogImage: 'https://www.predengenharia.com.br/30anos.webp',
    twitterCard: 'summary_large_image',
    ogUrl: 'https://www.predengenharia.com.br/',
    ogImageAlt:"Há 30 anos - Sua Parceira Confiavél em Soluções Industriais"
  })

</script>





