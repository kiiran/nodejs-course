function localtunnel {
  lt -s kiirankiirankiiran --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done