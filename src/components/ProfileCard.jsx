import { useState } from 'react';
import { PixelPanel, HudBadge } from './ui/Hud';
import { assets, personal } from '../data/portfolioData';

export default function ProfileCard({ className }) {
  const [imageError, setImageError] = useState(false);

  return (
    <PixelPanel className={`corner-brackets p-0 overflow-hidden ${className || ''}`} hover={false}>
      <div className="relative">
        <div className="aspect-[4/5] max-h-[340px] bg-surface-2 border-b border-white/10 overflow-hidden">
          {!imageError ? (
            <img
              src={assets.profileImage}
              alt={`Portrait of ${personal.name}`}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-2 to-surface-3"
              role="img"
              aria-label={`Initials for ${personal.name}`}
            >
              <span className="font-mono text-4xl font-semibold text-lime/60 tracking-widest">
                SG
              </span>
            </div>
          )}
        </div>

        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime/60 via-purple/40 to-transparent" />
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-bold text-lg tracking-tight">{personal.name}</h3>
          <p className="text-secondary text-sm mt-1">{personal.role}</p>
          <p className="font-mono text-xs text-purple mt-0.5">{personal.growthLabel}</p>
          <p className="font-mono text-xs text-muted mt-1">{personal.location}</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-surface-2 border border-white/8 p-2.5">
            <p className="hud-label text-[9px]">GPA</p>
            <p className="font-mono text-sm text-lime mt-0.5">{personal.gpa}</p>
          </div>
          <div className="bg-surface-2 border border-white/8 p-2.5">
            <p className="hud-label text-[9px]">Graduation</p>
            <p className="font-mono text-sm text-foreground mt-0.5">{personal.graduation}</p>
          </div>
          <div className="bg-surface-2 border border-white/8 p-2.5">
            <p className="hud-label text-[9px]">Focus</p>
            <p className="font-mono text-sm text-foreground mt-0.5">{personal.focus}</p>
          </div>
          <div className="bg-surface-2 border border-white/8 p-2.5">
            <p className="hud-label text-[9px]">Current Build</p>
            <p className="font-mono text-[10px] text-warning mt-0.5 leading-tight">
              {personal.currentBuild}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <HudBadge variant="lime">PLAYER_01</HudBadge>
          <HudBadge variant="purple">CS_STUDENT</HudBadge>
        </div>
      </div>
    </PixelPanel>
  );
}
