import axios from "axios"
import express from "express"
import crypto from "crypto-js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

function decryptData(encryptedData) {
    try {
        const i = crypto.enc.Hex.parse("e84ad660c4721ae0e84ad660c4721ae0"),
        
            r = crypto.enc.Utf8.parse("ZGl0bGVwLWRyYWdvbi1jaXR5"),

            u = crypto.enc.Utf8.parse("ZGl0bGVwLWRyYWdvbi1jaXR5LXNhbHQ="),

            f = crypto.PBKDF2(r.toString(crypto.enc.Utf8), u, {
                keySize: 4,
                iterations: 1e3
            }),

            e = crypto.lib.CipherParams.create({
                ciphertext: crypto.enc.Base64.parse(encryptedData)
            }),

            o = crypto.AES.decrypt(e, f, {
                mode: crypto.mode.CBC,
                iv: i,
                padding: crypto.pad.Pkcs7
            });

            return JSON.parse(o.toString(crypto.enc.Utf8))
    } catch (err) {
        
        console.error(err);
        return null
    }
}

app.get("/islands/heroic-race/", async (req, res) => {
    const response = await axios.get("https://www.ditlep.com/HeroicRace/Get")

    return res.send(decryptData(response.data))
})

app.get("/islands/maze/", async (req, res) => {
    const response = await axios.get("https://www.ditlep.com/MazeIsland/Get")

    return res.send(decryptData(response.data))
})

app.get("/islands/fog/", async (req, res) => {
    const response = await axios.get("https://www.ditlep.com/FogIsland/Get")

    return res.send(decryptData(response.data))
})

app.get("/islands/runner/", async (req, res) => {
    const response = await axios.get("https://www.ditlep.com/RunnerIsland/Get")

    return res.send(decryptData(response.data))
})

app.get("/islands/puzzle/", async (req, res) => {
    const response = await axios.get("https://www.ditlep.com/PuzzleIsland/Get")

    return res.send(decryptData(response.data))
})

app.get("/islands/maze/", async (req, res) => {
    const response = await axios.get("https://www.ditlep.com/MazeIsland/Get")

    return res.send(decryptData(response.data))
})

app.get("/islands/tower/", async (req, res) => {
    const response = await axios.get("https://www.ditlep.com/TowerIsland/Get")

    return res.send(decryptData(response.data))
})

app.get("/alliances/chests/", async (req, res) => {
    const response = await axios.get("https://www.ditlep.com/AllianceChest/Get")

    return res.send(decryptData(response.data))
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})