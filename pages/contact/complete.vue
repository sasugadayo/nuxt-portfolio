<template>
  <div class="p-contact__main-visual">
    <h1 class="p-contact__main-visual-title">お問い合わせ完了</h1>
    <p>
      お問い合わせいただきありがとうございました。<br />
      お問い合わせを受け付けました。
    </p>
    <p>
      折り返しご連絡いたしますので、 恐れ入りますが、しばらくお待ちください。
    </p>
    <p>
      なお、ご入力いただいたメールアドレス宛に受付完了メールを配信しております。<br />
      完了メールが届かない場合、処理が正常に行われていない可能性があります。<br />
      大変お手数ですが、再度お問い合わせの手続きをお願いいたします。
    </p>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin-bottom: 20px;
}
.p-contact {
  &__main-visual {
    text-align: center;
    padding: 5em 1em;
    margin-bottom: 2.5em;

    @include mq() {
      margin-bottom: 5em;
    }

    &-title {
      font-family: $font-ubuntu;
      font-size: fz(40);
      margin-bottom: 0.25em;
    }
  }
}
</style>
