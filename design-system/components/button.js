// Button — Web Component de exemplo. Consome apenas tokens (tokens.css).
// Estados: default, hover, focus, active, disabled, loading.
class SdxButton extends HTMLElement {
  static get observedAttributes() { return ['variant', 'size', 'disabled', 'loading']; }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }
  render() {
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'md';
    const loading = this.hasAttribute('loading');
    const disabled = this.hasAttribute('disabled') || loading;
    const pad = size === 'sm' ? 'var(--space-2) var(--space-3)' : 'var(--space-3) var(--space-5)';
    const bg = {
      primary: 'var(--color-brand-400)', secondary: 'var(--color-neutral-100)',
      ghost: 'transparent', danger: 'var(--color-danger-500)'
    }[variant];
    const fg = (variant === 'secondary' || variant === 'ghost')
      ? 'var(--color-neutral-900)' : 'var(--color-neutral-0)';
    this.innerHTML = `
      <button ${disabled ? 'disabled' : ''} style="
        font-family:var(--font-sans); font-size:var(--size-sm); font-weight:var(--weight-medium);
        color:${fg}; background:${bg}; border:none; border-radius:var(--radius-md);
        padding:${pad}; cursor:${disabled ? 'not-allowed' : 'pointer'};
        opacity:${disabled ? '0.6' : '1'}; transition:filter .15s;">
        ${loading ? 'Carregando…' : this.textContent || 'Botão'}
      </button>`;
  }
}
customElements.define('sdx-button', SdxButton);
