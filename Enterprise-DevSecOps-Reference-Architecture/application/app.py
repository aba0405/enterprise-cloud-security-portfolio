from flask import Flask, request, jsonify
import uuid

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        "application": "FinBank Payment API",
        "status": "Running",
        "version": "1.0"
    })

@app.route("/payments", methods=["POST"])
def payment():

    data = request.get_json()

    return jsonify({
        "transactionId": str(uuid.uuid4()),
        "customerId": data["customerId"],
        "amount": data["amount"],
        "status": "Approved"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)