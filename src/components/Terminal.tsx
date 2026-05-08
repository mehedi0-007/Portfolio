import { useState, useRef, useCallback } from 'react'
import { terminalCommands, terminalSuggestions } from '@/data/terminal'

interface TerminalLine {
  id: number
  html: string
}

const INITIAL_LINES: TerminalLine[] = [
  {
    id: 0,
    html: '<span class="t-green-text">✓</span> <span class="t-output">Portfolio shell v2.4.1 — Type a command or select below</span>',
  },
  {
    id: 1,
    html: '<span class="t-output">Available: </span><span class="t-accent">whoami</span><span class="t-output">, </span><span class="t-accent">skills</span><span class="t-output">, </span><span class="t-accent">projects</span><span class="t-output">, </span><span class="t-accent">contact</span><span class="t-output">, </span><span class="t-accent">interests</span><span class="t-output">, </span><span class="t-accent">help</span>',
  },
]

let lineId = 10

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES)
  const [input, setInput] = useState('')
  const outputRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (outputRef.current) {
        outputRef.current.parentElement!.scrollTop =
          outputRef.current.parentElement!.scrollHeight
      }
    }, 0)
  }, [])

  const runCmd = useCallback(
    (cmd: string) => {
      const clean = cmd.trim().toLowerCase()
      const promptHtml = `<span class="t-prompt">▸&nbsp;</span><span class="t-path">~/portfolio</span><span class="t-output"> $ </span><span class="t-output">${cmd}</span>`

      if (clean === 'clear') {
        setLines([
          {
            id: ++lineId,
            html: '<span class="t-output">Terminal cleared. Type <span class="t-accent">help</span> for commands.</span>',
          },
        ])
        setInput('')
        scrollToBottom()
        return
      }

      const newLines: TerminalLine[] = [{ id: ++lineId, html: promptHtml }]

      if (terminalCommands[clean]) {
        const result = terminalCommands[clean]()
        if (result) {
          newLines.push({ id: ++lineId, html: result })
        }
      } else if (clean === '') {
        // empty line — just show prompt
      } else {
        newLines.push({
          id: ++lineId,
          html: `<span class="t-output"><span style="color:#f87171">bash:</span> command not found: ${cmd} — try <span class="t-accent">help</span></span>`,
        })
      }

      setLines((prev) => [...prev, ...newLines])
      setInput('')
      scrollToBottom()
    },
    [scrollToBottom],
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') runCmd(input)
  }

  const focusInput = () => inputRef.current?.focus()

  return (
    <section id="terminal-section">
      <div className="container">
        <div className="section-label reveal">06 — Interface</div>
        <h2 className="section-title reveal reveal-d1">
          Interactive<br />
          <span style={{ color: 'var(--text-muted)' }}>terminal.</span>
        </h2>
        <p className="section-desc reveal reveal-d2">
          Ask me anything. Try a command below or type your own.
        </p>

        <div className="terminal-wrapper reveal reveal-d2">
          <div className="terminal-titlebar">
            <div className="t-dot t-red" />
            <div className="t-dot t-yellow" />
            <div className="t-dot t-green" />
            <div className="terminal-title">mehedi@portfolio ~ bash</div>
          </div>

          <div className="terminal-body" onClick={focusInput}>
            <div ref={outputRef} id="terminal-output">
              {lines.map((line, i) => (
                <div
                  key={line.id}
                  style={{ marginBottom: i === lines.length - 1 ? 0 : undefined }}
                  dangerouslySetInnerHTML={{ __html: line.html }}
                />
              ))}
              <br />
            </div>

            <div className="terminal-input-row">
              <span className="t-prompt">▸&nbsp;</span>
              <span className="t-path">~/portfolio</span>
              <span className="t-output">&nbsp;$&nbsp;</span>
              <input
                ref={inputRef}
                className="terminal-input"
                type="text"
                autoComplete="off"
                spellCheck={false}
                placeholder="type a command..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <div className="terminal-suggestions">
              {terminalSuggestions.map((cmd) => (
                <button key={cmd} className="suggestion-btn" onClick={() => runCmd(cmd)}>
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
