<script setup>
import SectionHeader from './SectionHeader.vue'
import ContactForm from './ContactForm.vue'
import ContactInfo from './ContactInfo.vue'
</script>

<template>
  <section id="contact" class="py-16 sm:py-20 px-5 sm:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-14">
        <div>
          <SectionHeader title="Contact" subtitle="Interesse in samenwerken of vragen? Stuur een bericht." />
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
    </div>
  </section>
</template>
