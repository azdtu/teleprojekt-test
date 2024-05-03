<script>
    let email = "";
    let pass = "";

    const login = async () => {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                pass: pass
            })
        });

        console.log(res);

        if (res.status == 200) {
            window.location = "/measurement";
        }
    };
</script>

<div class="login-container">
    <h1>Type 2 Diabetes Portal</h1>
    <p>Login to access your account</p>
    <input type="text" bind:value={email} placeholder="Email">
    <input type="password" bind:value={pass} placeholder="Password">
    <button class="login-button" on:click={login}>Login</button>
</div>

<style>
    .login-container {
        background-color: #f2f2f2; /* Meget lys grå farve */
        color: #333; /* Mørk tekstfarve for kontrast */
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 40px;
        width: 320px;
        text-align: center;
    }

    h1 {
        margin-bottom: 20px;
    }

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 4px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-size: 16px;
    }

    .login-button {
        background-color: #7b0000; /* Mørkerød farve */
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 12px 20px;
        cursor: pointer;
        font-size: 16px;
    }

    .login-button:hover {
        background-color: #5a0000; /* Mørkerød farve - mørkere nuance ved hover */
    }
</style>