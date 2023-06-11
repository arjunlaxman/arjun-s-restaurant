from flask import Flask, render_template, request

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/reservation', methods=['GET', 'POST'])
def reservation():
    if request.method == 'POST':
       
        name = request.form.get('name')
        email = request.form.get('email')
        date = request.form.get('date')
        time = request.form.get('time')
        guests = request.form.get('guests')

      

        
        return 'Reservation Successful!'

    return render_template('reservation.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
    
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')

       
        return 'Message Sent!'

    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
