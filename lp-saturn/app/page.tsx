"use client";

import { useEffect, useState } from "react";

const links = { login:"#", signup:"#", terms:"#", privacy:"#", otherTerms:"#", reports:"#", contact:"#", instagram:"#", google:"#", youtube:"#" };
const awards = [
  ["placa5m.png","Premiação de 5 milhões em vendas"], ["placa1m.png","Premiação de 1 milhão em vendas"],
  ["placa100k.png","Premiação de 100 mil em vendas"], ["placa500k.png","Premiação de 500 mil em vendas"],
  ["placa10m.png","Premiação de 10 milhões em vendas"],
];

function Brand({ footer=false }: { footer?:boolean }) { return <img className={`brand${footer ? " brand--footer" : ""}`} src="/assets/logoclara.png" alt="SaturnPay" />; }

function Dashboard() { return <div className="dashboard" aria-label="Prévia do painel SaturnPay">
  <aside className="dash-side"><strong><i>S</i> SaturnPay</strong>{["Dashboard","Vendas","Relatórios","Produtos","SaturnGO","Vitrine","Cupons","Alunos","Afiliados","Integrações","Equipe","API PIX","Financeiro"].map((x,i)=><span className={i===0?"active":""} key={x}>{x}</span>)}</aside>
  <div className="dash-main"><div className="dash-top"><div><b>Bom dia, Sua conta</b><small>Resumo do período</small></div><span>🇧🇷 &nbsp; ● &nbsp; Sua conta⌄</span></div>
  <div className="metrics">{[["Vendas totais","R$ 12.370,50"],["Quantidade de vendas","43"],["Produtos","8"],["Taxa de conversão geral","96%"]].map(x=><div key={x[0]}><small>{x[0]}</small><b>{x[1]}</b><em>Resumo do período</em></div>)}</div>
  <div className="dash-chart"><b>↗ Desempenho de vendas</b><span>Nenhum dado de vendas no período</span></div></div>
</div> }

function CookieBanner() {
  const [visible,setVisible]=useState(false);
  useEffect(()=>setVisible(!localStorage.getItem("saturn-cookie-consent")),[]);
  const accept=(value:string)=>{localStorage.setItem("saturn-cookie-consent",value);setVisible(false)};
  if(!visible)return null;
  return <aside className="cookie" aria-label="Preferências de cookies" role="dialog"><div><strong>Cookies e privacidade</strong><p>Usamos cookies essenciais para login e segurança da sessão, necessários para o painel funcionar. Cookies de medição e analytics (ex.: Google Analytics) só são ativados se você aceitar; sem isso, não rastreamos navegação para estatísticas.</p></div><div className="cookie-actions"><a href={links.privacy}>Mais informações</a><button onClick={()=>accept("essential")}>Apenas essenciais</button><button className="cookie-primary" onClick={()=>accept("all")}>Aceitar todos</button></div></aside>;
}

export default function Home(){return <main>
  <header className="header wrap"><a href="#inicio"><Brand/></a><nav><a href={links.login}>Login</a><a className="button small" href={links.signup}>Criar minha conta</a></nav></header>
  <section className="hero wrap" id="inicio"><div className="planet"/><div className="eyebrow"><span>S</span>A plataforma definitiva para impulsionar a sua operação</div><h1>Na Saturn, sua operação tem Pix taxa 0%</h1><p className="hero-sub">Ecossistema completo para você infoprodutor</p><a className="button hero-button" href={links.signup}>Criar minha conta</a>
    <div className="product-showcase"><div className="sales-toast-list">{[1,2,3,4].map(n=><div className="sales-toast" key={n}><i>S</i><div><b>Venda aprovada from saturn</b><span>Sua comissão: 56,90</span></div></div>)}</div><Dashboard/></div>
  </section>
  <section className="section wrap benefits"><h2>A plataforma que impulsiona suas vendas</h2><div className="benefit-grid"><article><span className="feature-icon">▣</span><div><h3>Checkout que converte</h3><p>Checkout com design pensado para você produtor</p></div></article><article><span className="feature-icon pie">◔</span><div><h3>Métricas em tempo real</h3><p>Acompanhe sua operação em tempo real</p></div></article><article><span className="feature-icon">♕</span><div><h3>Premiação ao negócio</h3><p>Sua operação reconhecida pelo seu esforço</p></div></article></div></section>
  <section className="section wrap payments"><h2>A melhor plataforma de pagamento para receber online</h2><div className="payment-grid"><article><span className="pay-icon pix-icon">◆</span><div><h3>Pix</h3><p>Recebimento em <b>D0</b></p></div></article><article><span className="pay-icon">▱</span><div><h3>Boleto</h3><p>Prazo de recebimento: Em até <b>1 dia</b></p></div></article><article><span className="pay-icon">▰</span><div><h3>Cartão e wallets</h3><p>Prazo de recebimento: Em até <b>2 dias</b></p></div></article></div></section>
  <section className="section wrap achievements"><h2>Programa de Conquistas</h2><div className="award-stage">{awards.map((x,i)=><img key={x[0]} className={`award award-${i}`} src={`/assets/${x[0]}`} alt={x[1]}/>) }<img className="bracelet" src="/assets/pulseira10k.webp" alt="Pulseira SaturnPay de conquista"/></div></section>
  <footer><div className="footer wrap"><Brand footer/><div><h3>Legal</h3><a href={links.terms}>Termos de Uso</a><a href={links.privacy}>Política de privacidade</a><a href={links.otherTerms}>Outros termos →</a></div><div><h3>Canais oficiais</h3><a href={links.reports}>Denúncias</a><a href={links.contact}>Contato</a></div><div><h3>Redes sociais</h3><div className="socials"><a href={links.instagram}>◎</a><a href={links.google}>G</a><a href={links.youtube}>▶</a></div></div></div><p className="copyright">© 2026 SaturnPay. Todos os direitos reservados</p></footer><CookieBanner/>
</main>}
