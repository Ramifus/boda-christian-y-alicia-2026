// src/scripts/animaciones.ts
// Las entradas de cada página. Cualquier elemento con la clase "revelar"
// aparece subiendo apenas y saliendo de un desenfoque leve la primera vez
// que su página entra en pantalla (al deslizar de costado). Los de una
// misma página entran escalonados.
//
// Al borrar una sección no hay nada que limpiar acá: se buscan por clase.
import { gsap } from "gsap";

export function iniciarAnimaciones(contenedor: HTMLElement) {
    const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desde = menosMovimiento ? { opacity: 0 } : { opacity: 0, y: 22, filter: "blur(4px)" };

    const paginas = Array.from(contenedor.querySelectorAll<HTMLElement>(":scope > section"));
    paginas.forEach((p) => gsap.set(p.querySelectorAll(".revelar"), desde));

    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (!entrada.isIntersecting) return;
                gsap.to(entrada.target.querySelectorAll(".revelar"), {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "sine.out",
                    delay: 0.15,
                });
                // Una sola vez por página: al volver ya está a la vista.
                observador.unobserve(entrada.target);
            });
        },
        { root: contenedor, threshold: 0.55 },
    );

    paginas.forEach((p) => observador.observe(p));
}
