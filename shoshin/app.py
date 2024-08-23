from flask import Flask, render_template
import os

app = Flask(__name__)

# Load Supabase credentials from environment variables or config.py
SUPABASE_URL = os.getenv('SUPABASE_URL') or 'your-supabase-url'
SUPABASE_KEY = os.getenv('SUPABASE_KEY') or 'your-supabase-key'

@app.route('/')
def index():
    return render_template('main.html', supabase_url=SUPABASE_URL, supabase_key=SUPABASE_KEY)

if __name__ == '__main__':
    app.run(debug=True)
