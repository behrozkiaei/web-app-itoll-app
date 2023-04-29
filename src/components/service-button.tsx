

import "../styles/globals.module.css";
interface ServiceButtonInterface {
    href: string,
    title: string,
    src: string,
    alt: string,
    text: string,
    spanText?:string
}
export const ServiceButton: React.FC<ServiceButtonInterface> = (
    { href, title, src, alt, text ,spanText}) => {
    return (
      <a href={href} aria-hidden="true" title={title} className="service-card">
        <img src={src} alt={alt} loading="lazy" />
        <p>{text}</p>
        {spanText && <span className="new">{spanText}</span>}
      </a>
    );
  }