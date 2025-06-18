from django.core.management.base import BaseCommand
from sysuser.tasks import setup_schedules


class Command(BaseCommand):
    help = 'Setup flight data update schedules'

    def handle(self, *args, **options):
        setup_schedules()
        self.stdout.write(self.style.SUCCESS('Successfully set up flight data update schedules'))