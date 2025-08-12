<template>
  <section id="contact" class="section">
    <BaseContainer>
      <div class="contact">
        <h2 class="section-title">Cuéntame sobre tu idea</h2>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <input 
            v-model="formData.name" 
            type="text" 
            placeholder="Tu nombre" 
            required 
          />
          <input 
            v-model="formData.email" 
            type="email" 
            placeholder="Correo electrónico" 
            required 
          />
          
          <select 
            v-model="formData.serviceType" 
            class="contact-select" 
            required
          >
            <option value="" disabled selected>Selecciona el tipo de servicio</option>
            <option value="informativa">Página Informativa ($399 USD)</option>
            <option value="landing">Landing Page ($799 USD)</option>
            <option value="tienda">Tienda Online ($1,299 USD)</option>
          </select>
          
          <select 
            v-model="formData.budget" 
            class="contact-select" 
            required
          >
            <option value="" disabled selected>¿Cuál es tu presupuesto estimado?</option>
            <option value="menos-400">Menos de $400 USD</option>
            <option value="400-800">$400 - $800 USD</option>
            <option value="800-1500">$800 - $1,500 USD</option>
            <option value="1500-3000">$1,500 - $3,000 USD</option>
            <option value="3000-5000">$3,000 - $5,000 USD</option>
            <option value="mas-5000">Más de $5,000 USD</option>
          </select>
          
          <textarea 
            v-model="formData.message" 
            rows="4" 
            placeholder="¿Qué necesitas? Cuéntame más detalles sobre tu proyecto..."
          ></textarea>
          
          <button class="btn" type="submit">Solicitar presupuesto</button>
        </form>
        <div class="alt">
          <a href="mailto:hello@vondrak.dev">hello@vondrak.dev</a>
          <span>·</span>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/00000000000">WhatsApp</a>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'

const formData = ref({
  name: '',
  email: '',
  serviceType: '',
  budget: '',
  message: ''
})

const handleSubmit = () => {
  // Aquí puedes implementar la lógica para enviar el formulario
  console.log('Formulario enviado:', formData.value)
  
  // Opcional: Resetear el formulario después del envío
  // formData.value = { name: '', email: '', serviceType: '', budget: '', message: '' }
}
</script>

<style scoped>
.contact{ display:grid; gap:16px }
.contact-form{
  display:grid; grid-template-columns: 1fr 1fr; gap:12px;
  background: var(--glass); border:1px solid var(--stroke); border-radius: var(--radius);
  padding:16px;
}
.contact-form textarea{ grid-column: 1 / -1 }
.contact-form input, .contact-form textarea, .contact-form select{
  width:100%; padding:12px 12px; border-radius:10px; border:1px solid var(--stroke);
  background: rgba(0,0,0,.25); color:#fff; outline:none;
}
.contact-form input::placeholder, .contact-form textarea::placeholder{ color:#cfcfe6bb }
.contact-select{
  cursor: pointer;
  font-size: 14px;
}
.contact-select option{
  background: rgba(0,0,0,.9);
  color: #fff;
}
.alt{ color: var(--muted) }
.alt a{ color:#fff; text-decoration:none }
@media (max-width: 900px){ .contact-form{ grid-template-columns: 1fr } }
</style>


