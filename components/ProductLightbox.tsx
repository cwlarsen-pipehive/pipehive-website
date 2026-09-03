"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

type ProductLightboxProps = {
  alt: string;
  caption: string;
  height: number;
  priority?: boolean;
  sizes: string;
  src: string;
  width: number;
};

export default function ProductLightbox({ alt, caption, height, priority, sizes, src, width }: ProductLightboxProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Dialog.Root>
      <motion.div
        className="product-lightbox"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.38, ease: "easeOut" }}
      >
        <Dialog.Trigger asChild>
          <button className="screenshot-trigger" type="button" aria-label={`Expand: ${caption}`}>
            <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} />
          </button>
        </Dialog.Trigger>
      </motion.div>
      <Dialog.Portal>
        <Dialog.Overlay className="lightbox-overlay" />
        <Dialog.Content className="lightbox-content">
          <Dialog.Title>{caption}</Dialog.Title>
          <Dialog.Description className="sr-only">Expanded PipeHive product screenshot.</Dialog.Description>
          <Dialog.Close className="lightbox-close" aria-label="Close expanded screenshot"><X size={19} /></Dialog.Close>
          <div className="lightbox-image"><Image src={src} alt={alt} width={width} height={height} sizes="95vw" /></div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
