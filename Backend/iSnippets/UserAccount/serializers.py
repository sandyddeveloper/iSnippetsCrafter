from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name', 'password' ]
        extra_kwargs = {
            'password' : {'write_only' : True}
        }
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)  # Corrected spelling
        instance = self.Meta.model(**validated_data)     # Corrected spelling
        if password is not None:
            instance.set_password(password)              # Corrected spelling
        instance.save()
        return instance