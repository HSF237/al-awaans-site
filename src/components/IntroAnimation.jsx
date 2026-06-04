import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LETTERS = 'AL AWAANS'.split('')
const ease = [0.76, 0, 0.24, 1]

export default function IntroAnimation({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1650)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'all',
          }}
        >
          {/* Top curtain */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '50.5%',
              background: '#080808',
              zIndex: 1,
            }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.95, ease }}
          />

          {/* Bottom curtain */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '50.5%',
              background: '#080808',
              zIndex: 1,
            }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.95, ease, delay: 0.06 }}
          />

          {/* Center content */}
          <motion.div
            style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              padding: '0 32px',
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Brand letters */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '0.02em',
                overflow: 'hidden',
                paddingBottom: 4,
              }}
            >
              {LETTERS.map((l, i) => (
                <motion.span
                  key={i}
                  style={{
                    display: 'inline-block',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(2.2rem, 8vw, 5.5rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#C49A38',
                    width: l === ' ' ? '0.28em' : 'auto',
                  }}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.06 + i * 0.07,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {l === ' ' ? ' ' : l}
                </motion.span>
              ))}
            </div>

            {/* Gold underline */}
            <motion.div
              style={{
                height: 1,
                background: 'linear-gradient(90deg, transparent, #C49A38, transparent)',
                marginTop: 14,
                transformOrigin: 'center',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.82, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Tagline */}
            <motion.p
              style={{
                marginTop: 12,
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.55rem, 1.3vw, 0.7rem)',
                fontWeight: 500,
                letterSpacing: '4.5px',
                textTransform: 'uppercase',
                color: 'rgba(240,240,240,0.3)',
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              Your Accessory Hub
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
