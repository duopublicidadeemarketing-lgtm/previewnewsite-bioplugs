"use client";

import { useState, useEffect } from "react";

type Perfil = "produtor" | "paisagista" | "parceiro";

const PERFIS: { value: Perfil; label: string }[] = [
  { value: "produtor", label: "Produtor" },
  { value: "paisagista", label: "Paisagista" },
  { value: "parceiro", label: "Parceiro comercial" },
];

const TELEFONE_INSTITUCIONAL = "(11) 94440-9993";
const TELEFONE_WHATSAPP = "5511944409993"; // padrão wa.me
const EMAIL_COMERCIAL = "programacao@bioplugs.com.br";

export function ContatoForm() {
  const [perfil, setPerfil] = useState<Perfil>("produtor");
  const [enviado, setEnviado] = useState(false);

  // Lê ?perfil=produtor da URL (vindos dos CTAs segmentados da home)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const p = params.get("perfil");
    if (p && PERFIS.find((x) => x.value === p)) {
      setPerfil(p as Perfil);
    }
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mock: log + mostra mensagem de sucesso. WordPress (Fluent Forms) cuida do envio real.
    const data = new FormData(e.currentTarget);
    console.log("contato submit:", Object.fromEntries(data.entries()));
    setEnviado(true);
    // Reset após 4s
    setTimeout(() => setEnviado(false), 6000);
    e.currentTarget.reset();
  };

  return (
    <section className="contato-page">
      <div className="contato-left">
        <div className="contato-eyebrow">Fale com a equipe</div>
        <h1 className="contato-title">
          Como podemos <span className="it">ajudar você?</span>
        </h1>
        <p className="contato-sub">
          Atendemos exclusivamente <strong>produtores e floricultores profissionais</strong>, paisagistas que buscam variedades premium e parceiros comerciais estratégicos. Conte sua demanda e nosso time técnico-comercial entra em contato.
        </p>

        {/* Seletor de perfil */}
        <div className="contato-perfil">
          <div className="contato-perfil-label">Você é:</div>
          <div className="contato-perfil-opts">
            {PERFIS.map((p) => (
              <button
                key={p.value}
                type="button"
                className={`contato-perfil-btn ${perfil === p.value ? "active" : ""}`}
                onClick={() => setPerfil(p.value)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="contato-form">
          {/* Campos comuns */}
          <div className="contato-field-row">
            <div className="contato-field">
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" name="nome" type="text" required autoComplete="name" />
            </div>
            <div className="contato-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
          </div>

          <div className="contato-field-row">
            <div className="contato-field">
              <label htmlFor="telefone">Telefone (com DDD)</label>
              <input id="telefone" name="telefone" type="tel" required autoComplete="tel" />
            </div>
            <div className="contato-field">
              <label htmlFor="cidade">Cidade / Estado</label>
              <input id="cidade" name="cidade" type="text" required />
            </div>
          </div>

          {/* Campos específicos por perfil */}
          {perfil === "produtor" && (
            <>
              <div className="contato-field">
                <label htmlFor="empresa">Nome da fazenda / empresa</label>
                <input id="empresa" name="empresa" type="text" />
              </div>
              <div className="contato-field">
                <label htmlFor="categoria">Categoria de interesse</label>
                <select id="categoria" name="categoria" defaultValue="">
                  <option value="" disabled>
                    Selecione…
                  </option>
                  <option value="corte">Corte</option>
                  <option value="jardim">Jardim</option>
                  <option value="vaso">Vaso</option>
                  <option value="todas">Todas as categorias</option>
                </select>
              </div>
            </>
          )}

          {perfil === "paisagista" && (
            <>
              <div className="contato-field">
                <label htmlFor="empresa">Escritório / nome profissional</label>
                <input id="empresa" name="empresa" type="text" />
              </div>
              <div className="contato-field">
                <label htmlFor="projeto">Tipo de projeto em andamento</label>
                <select id="projeto" name="projeto" defaultValue="">
                  <option value="" disabled>
                    Selecione…
                  </option>
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial / corporativo</option>
                  <option value="publico">Praça / espaço público</option>
                  <option value="evento">Evento pontual</option>
                </select>
              </div>
            </>
          )}

          {perfil === "parceiro" && (
            <>
              <div className="contato-field">
                <label htmlFor="empresa">Razão social / empresa</label>
                <input id="empresa" name="empresa" type="text" required />
              </div>
              <div className="contato-field">
                <label htmlFor="interesse">Natureza da parceria</label>
                <select id="interesse" name="interesse" defaultValue="">
                  <option value="" disabled>
                    Selecione…
                  </option>
                  <option value="revenda">Revenda / distribuição</option>
                  <option value="exportacao">Exportação</option>
                  <option value="breeder">Sou breeder / fornecedor de genética</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </>
          )}

          <input type="hidden" name="perfil" value={perfil} />

          <div className="contato-field">
            <label htmlFor="mensagem">Sua mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Conte um pouco sobre sua demanda, prazos e expectativas…"
              required
            />
          </div>

          <button type="submit" className="contato-submit">
            Enviar mensagem <span>→</span>
          </button>

          <div className={`contato-success ${enviado ? "show" : ""}`}>
            ✓ Mensagem enviada com sucesso. Nosso time entra em contato em até 1 dia útil.
          </div>
        </form>
      </div>

      <aside className="contato-right">
        <h3>
          Atibaia,<br />
          <span className="lime">SP — Brasil.</span>
        </h3>

        <div className="contato-info-block">
          <div className="contato-info-label">Endereço</div>
          <div className="contato-info-value">
            Atibaia / SP — Brasil
            <br />
            Atendimento em todo território nacional.
          </div>
        </div>

        <div className="contato-info-block">
          <div className="contato-info-label">Email comercial</div>
          <div className="contato-info-value">
            <a href={`mailto:${EMAIL_COMERCIAL}`}>{EMAIL_COMERCIAL}</a>
          </div>
        </div>

        <div className="contato-info-block">
          <div className="contato-info-label">Telefone</div>
          <div className="contato-info-value">
            <a href={`tel:+55${TELEFONE_WHATSAPP}`}>{TELEFONE_INSTITUCIONAL}</a>
          </div>
        </div>

        <div className="contato-info-block">
          <div className="contato-info-label">Horário de atendimento</div>
          <div className="contato-info-value">
            Segunda a quinta — 8h às 17h
            <br />
            Sexta — 8h às 16h
          </div>
        </div>

        <a
          href={`https://wa.me/${TELEFONE_WHATSAPP}?text=Olá!%20Vim%20pelo%20site%20da%20Bioplugs.`}
          className="contato-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp Business
        </a>
      </aside>
    </section>
  );
}
