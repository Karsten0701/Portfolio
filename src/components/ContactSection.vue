<script setup>
import SectionHeader from './SectionHeader.vue'
import ContactForm from './ContactForm.vue'
import ContactInfo from './ContactInfo.vue'
</script>

<template>
  <section id="contact" class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-12 gap-12">
        <div class="lg:col-span-6">
          <SectionHeader title="Contact" subtitle="Interesse in samenwerken of heb je vragen? Stuur een bericht." />
          <ContactForm />
        </div>
        <div class="lg:col-span-5 lg:col-start-8">
          <ContactInfo />
        </div>
      </div>
    </div>
  </section>
</template>
