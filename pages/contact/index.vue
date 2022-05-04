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
            class="c-input-text"
            type="text"
            name="username"
            autocomplete="name"
          />
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>

      <div class="p-contact__item">
        <label for="katakana">フリガナ</label>
        <validation-provider
          v-slot="{ errors }"
          rules="required|katakana"
          name="フリガナ"
        >
          <input
            id="katakana"
            v-model="katakana"
            class="c-input-text"
            type="text"
            name="katakana"
          />
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>

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
            class="c-input-text"
            type="text"
            name="useremail"
            autocomplete="email"
          />
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>

      <div class="p-contact__item">
        <label for="message">お問い合わせ内容</label>
        <validation-provider
          v-slot="{ errors }"
          rules="required|max:1000"
          name="お問い合わせ内容"
        >
          <textarea
            id="message"
            v-model="message"
            class="c-input-text p-contact__item-textarea"
            name="message"
          ></textarea>
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>

      <div v-show="false" class="p-contact__item">
        <label for="message">スパムでない場合は空欄</label>
        <input v-model="botField" type="text" name="bot-field" />
      </div>

      <div class="p-contact__item">
        <label for="privacy">プライバシーポリシー</label>
        <div class="p-privacy-policy">
          <p>
            当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。
          </p>

          <h3>適用範囲</h3>
          <p>
            本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。
          </p>

          <h3>個人情報の利用目的</h3>
          <p>
            当サイトは、お客様からご提供いただく情報を以下の目的の範囲内において利用します。
          </p>

          <ul class="p-privacy-policy__list">
            <li>ご本人確認のため</li>
            <li>お問い合わせ、コメント等の確認・回答のため</li>
            <li>メールマガジン・DM・各種お知らせ等の配信・送付のため</li>
            <li>
              お客さまの承諾・申込みに基づく、提携事業者・団体等への個人情報の提供のため
            </li>
            <li>利用規約等で禁じている行為などの調査のため</li>
            <li>その他個別に承諾いただいた目的</li>
          </ul>

          <h3>個人情報の管理</h3>
          <p>
            当サイトは、個人情報の正確性及び安全確保のために、セキュリティ対策を徹底し、個人情報の漏洩、改ざん、不正アクセスなどの危険については、必要かつ適切なレベルの安全対策を実施します。
          </p>
          <p>
            当サイトは、第三者に重要な情報を読み取られたり、改ざんされたりすることを防ぐために、SSLによる暗号化を使用しております。
          </p>

          <h3>個人情報の第三者提供</h3>
          <p>
            当サイトは、以下を含む正当な理由がある場合を除き、個人情報を第三者に提供することはありません。
          </p>

          <ul class="p-privacy-policy__list">
            <li>ご本人の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命・身体・財産の保護に必要な場合</li>
            <li>公衆衛生・児童の健全育成に必要な場合</li>
            <li>
              国の機関等の法令の定める事務への協力の場合（税務調査、統計調査等）
            </li>
          </ul>
          <p>
            当サイトでは、利用目的の達成に必要な範囲内において、他の事業者へ個人情報を委託することがあります。
          </p>

          <h3>個人情報に関するお問い合わせ</h3>
          <p>
            開示、訂正、利用停止等のお申し出があった場合には、所定の方法に基づき対応致します。具体的な方法については、個別にご案内しますので、お問い合わせください。
          </p>

          <p>
            なお、コメントが承認されると、プロフィール画像がコメントとともに一般公開されます。
          </p>

          <h3>他サイトからの埋め込みコンテンツ</h3>
          <p>
            当サイトには、埋め込みコンテンツ
            （動画、画像、投稿など）が含まれます。他サイトからの埋め込みコンテンツは、訪問者がそのサイトを訪れた場合とまったく同じように振る舞います。
          </p>
          <p>
            これらのサイトは、あなたのデータの収集、Cookie（クッキー）の使用、サードパーティによる追加トラッキングの埋め込み、埋め込みコンテンツとのやりとりの監視を行うことがあります。
          </p>
          <p>
            アカウントを使ってそのサイトにログイン中の場合、埋め込みコンテンツとのやりとりのトラッキングも含まれます。
          </p>

          <h3>免責事項</h3>
          <p>
            当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
          <p>
            当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
          </p>
          <p>
            当サイトで掲載している料金表記について、予告なく変更されることがあります。
          </p>

          <h3>著作権・肖像権</h3>
          <p>
            当サイトで掲載しているすべてのコンテンツ（文章、画像、動画、音声、ファイル等）の著作権・肖像権等は当サイト所有者または各権利所有者が保有し、許可なく無断利用（転載、複製、譲渡、二次利用等）することを禁止します。また、コンテンツの内容を変形・変更・加筆修正することも一切認めておりません。
          </p>
          <p>
            各権利所有者におかれましては、万一掲載内容に問題がございましたら、ご本人様よりお問い合わせください。迅速に対応いたします。
          </p>

          <h3>リンク</h3>
          <p>
            当サイトは原則リンクフリーです。リンクを行う場合の許可や連絡は不要です。引用する際は、引用元の明記と該当ページへのリンクをお願いします。
          </p>
          <p>
            ただし、画像ファイルへの直リンク、インラインフレームを使用したHTMLページ内で表示する形でのリンクはご遠慮ください。
          </p>

          <h3>本プライバシーポリシーの変更</h3>
          <p>
            当サイトは、本プライバシーポリシーの内容を適宜見直し、その改善に努めます。
          </p>
          <p>
            本プライバシーポリシーは、事前の予告なく変更することがあります。
          </p>
          <p>
            本プライバシーポリシーの変更は、当サイトに掲載された時点で有効になるものとします。
          </p>
        </div>

        <div class="p-privacy-policy__agreement">
          <validation-provider
            :rules="{ required: { allowFalse: false } }"
            name="プライバシーポリシー"
          >
            <input
              id="privacy"
              v-model="privacy"
              class="p-privacy-policy__agreement-checkbox"
              type="checkbox"
              name="privacy"
            />
          </validation-provider>
          <small>プライバシーポリシーに同意する</small>
        </div>
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
      params.append('privacy', this.privacy)
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

<style lang="scss" scoped>
li {
  list-style: none;
}

label {
  display: block;
  margin-bottom: 5px;
}

h3 {
  margin-top: 10px;
  margin-bottom: 5px;
}
.c-input-text {
  border: 1px solid #ccc;
  min-width: 100%;
  min-height: 50px;
}

.p-contact {
  width: 80%;
  margin: 0 auto;
  &__form {
    margin-top: 20px;
  }
}

.p-contact__item {
  margin-bottom: 20px;
}

.p-contact__error {
  color: red;
}

.p-privacy-policy {
  display: block;
  padding: 15px;
  height: 150px;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 12px;
  line-height: 1.5;
  color: #505050;
  border: 1px #ccc solid;
  text-align: left;
}

.p-privacy-policy__agreement {
  text-align: center;
  margin-top: 10px;

  &-checkbox {
    vertical-align: middle;
  }

  &__list {
    text-emphasis: none;
  }
}

.p-ocntact__submit-button {
  margin: 0 auto;
  display: block;
  height: 50px;
  width: 200px;
  background-color: springgreen;
  border-radius: 10px;
}
</style>
