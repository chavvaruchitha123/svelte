<script>

</script>
<main>
    <form>
        <label for="first name">First Name</label>
        <input id="first name" placeholder="Enter first name"/><br/>
        <label for="second name">Second Name</label>
        <input id="second name" placeholder="Enter second name"/><br/>
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Enter Email address"/><br/>
        <label for="password">password</label>
        <input id="password" type="password" placeholder="Enter password"/><br/>
        <button id="submit">Submit</button>
    </form>
</main>
<style>
    main {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input {
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
    }

    input[type="email"] {
        border-color: #007bff;
    }

    input[type="password"] {
        border-color: #28a745;
    }

    button {
        padding: 10px;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }

    button:active {
        background-color: #004085;
    }
</style>