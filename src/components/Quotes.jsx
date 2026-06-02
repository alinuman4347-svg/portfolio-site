const quotes = [
  { text: 'Exceptional creativity and attention to detail. Delivered exactly what we needed.', cite: '— Client Review' },
  { text: 'Professional, reliable, and highly skilled designer.', cite: '— Creative Director' },
]

export default function Quotes() {
  return (
    <section>
      <div className="wrap quotes">
        {quotes.map((q, i) => (
          <div key={i} className="quote reveal">
            <span className="mk">"</span>
            <p>{q.text}</p>
            <cite>{q.cite}</cite>
          </div>
        ))}
      </div>
    </section>
  )
}
