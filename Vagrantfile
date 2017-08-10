Vagrant.configure("2") do |config|
  config.vm.provider "docker" do |d|
    d.build_dir = "."
    d.name = "open-weather-icons"
    d.ports = ["80:80","22:22", "3306:3306"]
    d.remains_running = false
  end
end
