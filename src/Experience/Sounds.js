import Experience from './Experience.js'
import { Howl, Howler } from 'howler'

export default class Sounds
{
    constructor()
    {
        this.experience = new Experience()

        this.arcade = new Howl({
            src: ['/sounds/arcade.mp3'],
            volume: 0.15
        });

        this.bloop = new Howl({
            src: ['/sounds/bloop.mp3'],
            volume: 0.3
        });

        this.click = new Howl({
            src: ['/sounds/click.mp3'],
            volume: 0.3
        });

        this.ding = new Howl({
            src: ['/sounds/ding.mp3'],
            volume: 0.14
        });

        this.cooking = new Howl({
            src: ['/sounds/cooking.mp3'],
            loop: true,
            volume: 0.05
        });
        
        this.whoosh = new Howl({
            src: ['/sounds/whoosh.mp3'],
            volume: 0.6
        });

        this.hologram = new Howl({
            src: ['/sounds/hologram.mp3'],
            volume: 0.2
        });

        this.setMute()
    }

    setMute()
    {
        // Set up
        this.muted = typeof this.debug !== 'undefined'
        Howler.mute(this.muted)

        // M Key
        window.addEventListener('keydown', (_event) =>
        {
            if(_event.key === 'm')
            {
                this.muted = !this.muted
                Howler.mute(this.muted)
            }
        })

        // Tab focus / blur
        document.addEventListener('visibilitychange', () =>
        {
            if(document.hidden)
            {
                Howler.mute(true)
            }
            else
            {
                Howler.mute(this.muted)
            }
        })

        // Debug
        if(this.debug)
        {
            this.debugFolder.add(this, 'muted').listen().onChange(() =>
            {
                Howler.mute(this.muted)
            })
        }
    }


    playArcade() {
        this.arcade.play()
    }

    playBloop() {
        this.bloop.play()
    }

    playClick() {
        this.click.play()
    }

    playDing() {
        this.ding.play()
    }

    playCooking() {
        this.cooking.play()
    }

    playWhoosh() {
        this.whoosh.play()
    }

    playHologram() {
        this.hologram.play()
    }



}
