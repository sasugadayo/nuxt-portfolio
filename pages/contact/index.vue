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

      <div class="p-contact__item">
        <div class="">
          <h3>本サイトは、山口流石が運営するポートフォリオサイトです。</h3>
          <h4>個人情報保護方針</h4>
          <p>
            当社は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
          </p>
          <h4>個人情報の管理</h4>
          <p>
            当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
          </p>
          <h4>個人情報の利用目的</h4>
          <p>
            本ウェブサイトでは、お客様からのお問い合わせ時に、お名前、e-mailアドレス、電話番号等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。
            お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
          </p>
          <h4>個人情報の第三者への開示・提供の禁止</h4>
          <p>
            当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
          </p>
          <ul>
            <li>・お客さまの同意がある場合</li>
            <li>
              ・お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
            </li>
            <li>
              ・法令に基づき開示することが必要である場合 個人情報の安全対策
            </li>
          </ul>
          <p>
            当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
          </p>
          <h4>ご本人の照会</h4>
          <p>
            お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
          </p>
          <h4>法令、規範の遵守と見直し</h4>
          <p>
            当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
          </p>
        </div>

        <label for="privacy">プライバシーポリシー</label>
        <validation-provider
          rules="required:allowFalse:false"
          name="プライバシーポリシー"
        >
          <input
            id="privacy"
            v-model="privacy"
            type="checkbox"
            name="privacy"
            autocomplete="checkboxz"
          />
        </validation-provider>
      </div>

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
      privacy: false,
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
      const path = new URL(window.location)
      params.append('form-name', 'contact')
      params.append('username', this.username)
      params.append('katakana', this.katakana)
      params.append('useremail', this.useremail)
      params.append('message', this.message)
      // params.append('privacy', this.privacy)
      if (this.botField) {
        params.append('bot-field', this.botField)
      }
      this.$axios
        .$post(path, params)
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
      this.privacy = false
      this.isError = false
      this.$refs.observer.reset()
    },
  },
}
</script>
