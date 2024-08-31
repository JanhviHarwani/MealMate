from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def _set_response(self, status=200):
        self.send_response(status)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')  # Allow requests from any origin
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')  # Allow GET, POST, OPTIONS methods
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')  # Allow Content-Type header
        self.end_headers()

    def do_OPTIONS(self):
        self._set_response()
        
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        # Convert the POST data to a dictionary
        data = json.loads(post_data.decode('utf-8'))

        # Retrieve the parameters
        food_items = data.get('food_items', [])
        spice_level = data.get('spice_level', '')
        cuisine = data.get('cuisine', '')
        is_veg = data.get('is_veg', '')
        allergy = data.get('allergy', '')

        # Formulate response
        response_data = {
            'food_items': food_items,
            'spice_level': spice_level,
            'cuisine': cuisine,
            'is_veg': is_veg,
            'allergy': allergy
        }

        # Sending response
        self._set_response()
        self.wfile.write(json.dumps("You can make Mushroom-Spinach Scrambled Eggs and Colombian Scrambled Eggs!").encode('utf-8'))
        
    def do_GET(self):
        # Predefined data to be included in the response
        data = "Twenty-five years Dana had been waiting. She tried to be patient during that time but she hadn't always managed to be as patient as she'd like. But today the opportunity had finally come. The thing she always imagined would make her the happiest person in the world was about to happen. She didn't know why at this specific time she all of a sudden felt sick inside."

        # Formulate response
        response_data = {
            'data': data
        }

        # Sending response
        self._set_response()
        self.wfile.write(json.dumps(response_data).encode('utf-8'))


def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
