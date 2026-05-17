export function AssistantScreen() {
  return (
    <main className="screen">
      <header className="page-header">
        <p className="eyebrow">Asszisztens</p>
        <h1>Помощник</h1>
      </header>

      <section className="card assistant-card">
        <h2>Скоро здесь будет AI-помощник</h2>
        <p>
          Сюда перенесём голосовой ввод, фото/OCR, перевод и объяснения венгерских слов.
        </p>

        <textarea placeholder="Например: объясни слово dobni" />
        <button type="button">Спросить</button>
      </section>
    </main>
  )
}
