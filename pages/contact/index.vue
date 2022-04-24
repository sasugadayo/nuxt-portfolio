<template>
  <div class="p-contact">
    <validation-observer
      ref="observer"
      v-slot="{ invalid, validated }"
      tag="form"
      class="p-contact__form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      :class="sendingClass"
      @submit.prevent="onSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div class="p-contact__item">
        <label for="username">お名前</label>
        <validation-provider
          v-slot="{ errors }"
          rules="required|max:100"
          name="お名前"
        >
          <input
            id="username"
            v-model="username"
            type="text"
            name="username"
            autocomplete="name"
          />
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item">
        <label for="katakana">フリガナ</label>
        <validation-provider
          v-slot="{ errors }"
          rules="required|katakana"
          name="フリガナ"
        >
          <input id="katakana" v-model="katakana" type="text" name="katakana" />
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item">
        <label for="useremail">メールアドレス</label>
        <validation-provider
          v-slot="{ errors }"
          rules="required|email|max:256"
          name="メールアドレス"
        >
          <input
            id="useremail"
            v-model="useremail"
            type="text"
            name="useremail"
            autocomplete="email"
          />
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item">
        <label for="message">お問い合わせ内容</label>
        <validation-provider
          v-slot="{ errors }"
          rules="required|max:1000"
          name="お問い合わせ内容"
        >
          <textarea id="message" v-model="message" name="message"></textarea>
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div v-show="false" class="p-contact__item">
        <label for="message">スパムでない場合は空欄</label>
        <input v-model="botField" type="text" name="bot-field" />
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__submit">
        <button type="submit" :disabled="invalid || !validated">送信</button>
      </div>
      <!-- /.p-contact__submit -->
    </validation-observer>
    <!-- /.p-contact__form -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      katakana: '',
      useremail: '',
      message: '',
      botField: '',
      isSubmit: false,
      isSending: false,
      isError: false,
      completeMessage: '',
    }
  },
  computed: {
    sendingClass() {
      return {
        'is-sending': this.isSending,
        'is-error': this.isError,
        'is-complete': this.isSubmit,
      }
    },
  },
  methods: {
    onSubmit() {
      if (this.isSending) {
        return
      }
      this.isSending = true
      this.completeMessage = '送信処理中…'
      const params = new URLSearchParams()
      params.append('form-name', 'contact')
      params.append('username', this.username)
      params.append('katakana', this.katakana)
      params.append('useremail', this.useremail)
      params.append('message', this.message)
      if (this.botField) {
        params.append('bot-field', this.botField)
      }
      this.$axios
        .$post('/', params)
        .then(() => {
          this.completeMessage = 'お問い合わせを送信しました！'
          this.resetForm()
          this.isSubmit = true
        })
        .catch(() => {
          this.completeMessage = 'お問い合わせの送信が失敗しました'
          this.isError = true
        })
        .finally(() => {
          this.isSending = false
        })
    },

    resetForm() {
      this.username = ''
      this.katakana = ''
      this.useremail = ''
      this.message = ''
      this.isError = false
      this.$refs.observer.reset()
    },
  },
}
</script>
