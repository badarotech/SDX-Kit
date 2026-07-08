// Card — Web Component de exemplo. Consome apenas tokens (tokens.css).
class SdxCard extends HTMLElement {
  connectedCallback() {
    const padding = this.getAttribute('padding') === 'lg' ? 'var(--space-6)' : 'var(--space-4)';
    const interactive = this.hasAttribute('interactive');
    const inner = this.innerHTML;
    this.innerHTML = `
      <div style="
        background:var(--color-neutral-0); border:1px solid var(--color-neutral-100);
        border-radius:var(--radius-lg); padding:${padding}; box-shadow:var(--shadow-sm);
        ${interactive ? 'cursor:pointer;' : ''}">
        ${inner}
      </div>`;
  }
}
customElements.define('sdx-card', SdxCard);
