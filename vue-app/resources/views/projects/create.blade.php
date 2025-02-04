<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css">
    <style>body { padding-top: 40px; }</style>
</head>

<body>
    <div id="app" class="container">
        @include ('projects.list')

        <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
            <div class="control">
                <label for="name" class="label">Project Name:</label>

                <input type="text" id="name" name="name" class="input" v-model="form.name">

                <span class="help is-danger" v-text="form.errors.get('form.name')"></span>
            </div>

            <div class="control">
                <label for="description" class="label">Project Description:</label>

                <input type="text" id="description" name="description" class="input" v-model="form.description" required>
                <span class="help is-danger" v-text="form.errors.get('form.description')"></span>
            </div>

            <div class="control">
                <button class="button is-primary">Create</button>
            </div>
        </form>
    </div>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js"></script>
    <script src="/js/app.js"></script>
</body>
</html>